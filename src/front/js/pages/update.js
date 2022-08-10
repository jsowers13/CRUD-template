import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

export const Update = () => {
  const { store, actions } = useContext(Context);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const submitform = (e) => {
    e.preventDefault();
    console.log(params.id);
    actions.updateEmployee(params.id, firstName, lastName, email, phoneNumber);
    alert("Employee Record Updated successfully");
    navigate("/read");
    window.location.reload(false);
  };
  // useEffect establishes the baseline data that will be used as a reference when updating employee info.
  // so that updater will know what the original data was prior to any update
  useEffect(() => {
    async function fetchData() {
      const data = await actions.getEmployeeByID(params.id);
      console.log(data);
      setCurrentEmployee(data);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      setPhoneNumber(data.phone_number);
      console.log(currentEmployee);
      return data;
    }
    fetchData();
  }, []);
  if (currentEmployee == null) {
    return (
      <Image
        className="mx-auto d-block"
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      />
    );
  }
  return (
    <div className="container mt-5">
      <h1>Employee Number: {params.id}</h1>
      <form onSubmit={submitform}>
        <div className="form-group mb-3">
          <label htmlFor="firstNameInput">First Name</label>
          <input
            id="firstNameInput"
            className="form-control"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastNameInput">Last Name</label>
          <input
            id="lastNameInput"
            className="form-control"
            value={lastName}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phoneNumberInput">Phone Number</label>
          <input
            type="tel"
            id="phoneNumberInput"
            className="form-control"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Employee
        </button>
      </form>
    </div>
  );
};
