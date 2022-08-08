import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export const Read = () => {
  const { store, actions } = useContext(Context);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await actions.getAllEmployees();
      setTableData(data);
      return data;
    }
    fetchData();
  }, []);

  if (tableData.length == 0) {
    return (
      <Image
        className="mx-auto d-block"
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      />
    );
  }
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
          {tableData.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.first_name + " " + employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_number}</td>
                <td className="text-center">
                  <i
                    className="fa-solid fa-file-pen"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  ></i>
                  <div
                    class="modal fade"
                    id="updateModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Update Employee Record
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => {
                      actions.deleteEmployee(employee.id);
                    }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
