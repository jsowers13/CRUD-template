import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Read = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getAllEmployees();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
