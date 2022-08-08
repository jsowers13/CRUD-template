"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Employee
from api.utils import generate_sitemap, APIException
# import requests

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/employees', methods=['GET'])
def get_all_employees():
    employees = Employee.query.all()
    all_employees = list(map(lambda employee: employee.serialize(), employees))
    return jsonify(all_employees), 200

@api.route('/employees', methods=['POST'])
def create_new_employee():
    body = request.get_json()
    first_name = body["first_name"]
    last_name = body["last_name"]
    email = body["email"]
    phone_number = body["phone_number"]
    employee = Employee(first_name=first_name, last_name=last_name, email=email, phone_number=phone_number)
    print(employee)
    db.session.add(employee)
    db.session.commit()
    # new_employee = jsonify(employee.serialize)
    return (jsonify(employee.serialize())), 201

@api.route('/employees/<int:id>', methods=['GET'])
def get_employee_by_id(id):
    single_employee = Employee.query.filter_by(id=="id")
    print(single_employee)

    return jsonify(single_employee), 200

# @api.route('/employees/<int:id>', methods=['PUT'])
# def update_employee_info(id):
#     employee = Employee.query.get(id)


@api.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id):
    employee = Employee.query.get(id)
    db.session.delete(employee)
    db.session.commit()

    return "successfully deleted employee record"
