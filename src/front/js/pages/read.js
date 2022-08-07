import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Read = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getAllEmployees();
  }, []);

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {store.employees.map((employee, index) => {
            return (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.first_name + " " + employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_number}</td>
                <td className="text-center">
                  <i className="fa-solid fa-file-pen"></i>
                </td>
                <td className="text-center">
                  <i class="fa-solid fa-trash-can"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
