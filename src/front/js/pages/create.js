import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Create = () => {
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const submitform = (e) => {
    e.preventDefault();
    actions.createEmployee(firstName, lastName, email, phoneNumber);
    navigate("/read");
    window.location.reload(false);
  };
  return (
    <div className="container mt-5">
      <form onSubmit={submitform}>
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
          <label htmlFor="phoneNumberInput">Phone Number</label>
          <input
            type="tel"
            id="phoneNumberInput"
            className="form-control"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Employee
        </button>
      </form>
    </div>
  );
};
