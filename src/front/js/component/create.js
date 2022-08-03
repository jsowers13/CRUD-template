import React from "react";

export const Create = () =>{

    return(
        <div>
            <form>
                <div className="form-group">
                    <label for="firstNameInput">First Name</label>
                    <input id="firstNameInput" className="form-control" placeholder="First Name"></input>                   
                </div>
                <div className="form-group">
                    <label for="lastNameInput">Last Name</label>
                    <input id="lastNameInput" className="form-control" placeholder="Last Name"></input>                   
                </div>
                <div className="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" id="emailInput" className="form-control" placeholder="Email"></input>                   
                </div>
                <div className="form-group">
                    <label for="phoneNumberInput">Phone Number</label>
                    <input type="tel" id="phoneNumberInput" className="form-control" placeholder="Phone Number"></input>                   
                </div>
            </form>
        </div>
    )
}