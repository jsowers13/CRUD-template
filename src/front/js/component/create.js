import React, {useState} from "react";

export const Create = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    return(
        <div>
            <form>
                <div className="form-group">
                    <label for="firstNameInput">First Name</label>
                    <input id="firstNameInput" className="form-control" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}></input>                   
                </div>
                <div className="form-group">
                    <label for="lastNameInput">Last Name</label>
                    <input id="lastNameInput" className="form-control" placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)}></input>                   
                </div>
                <div className="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" id="emailInput" className="form-control" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}></input>                   
                </div>
                <div className="form-group">
                    <label for="phoneNumberInput">Phone Number</label>
                    <input type="tel" id="phoneNumberInput" className="form-control" placeholder="Phone Number" onChange={(e) =>setPhoneNumber(e.target.value)}></input>                   
                </div>
            </form>
        </div>
    )
}