import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { UpdateModal } from "../component/updatemodal";

export const Read = () => {
  const { store, actions } = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
              <tr key={employee.id}>
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
                    className="modal fade"
                    id="updateModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Update Employee Record
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form
                            onSubmit={() =>
                              actions.updateEmployee(
                                employee.id,
                                firstName,
                                lastName,
                                email,
                                phoneNumber
                              )
                            }
                          >
                            <div className="form-group mb-3">
                              <label htmlFor="firstNameInput">First Name</label>
                              <input
                                id="firstNameInput"
                                className="form-control"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                              ></input>
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="lastNameInput">Last Name</label>
                              <input
                                id="lastNameInput"
                                className="form-control"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                              ></input>
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="emailInput">Email</label>
                              <input
                                type="email"
                                id="emailInput"
                                className="form-control"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                              ></input>
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="phoneNumberInput">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phoneNumberInput"
                                className="form-control"
                                placeholder="Phone Number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              ></input>
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Update Employee
                            </button>
                          </form>
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
