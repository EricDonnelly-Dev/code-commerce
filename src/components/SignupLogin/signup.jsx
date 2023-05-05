import React from "react";

import InputBase from "../utils/inputs/inputBase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        const inputData = [
            {id:"emailAddress", name:"email", type:"email", placeholder:"Email Address",label:"Your Email Address"},
            {id:"password", name:"password", type:"password", placeholder:"Password",label:"Create Password"},
            {id:"confirmPassword", name:"confirmPassword", type:"password", placeholder:"Confirm Password",label:"Confirm Password"},
            {id:"fName", name:"fName", type:"text", placeholder:"First Name",label:"First Name"},
            {id:"lName", name:"lName", type:"text", placeholder:"Last Name",label:"Last Name"},
            {id:"postalCode", name:"postalCode", type:"text", placeholder:"Postal Code",label:"Postal Code"},
        ];
    return (
        <>
            <div className="signupContainer">
                <h1>Sign Up</h1>
                <form className="signupForm">
                    {inputData.map((input, index) => {
                        return <InputBase key={index} {...input} />
                    })}
                    <button className="signupButton">Sign Up</button>
                </form>
            </div>
            <hr />
            <button className="fbButton"><FontAwesomeIcon icon={faFacebookF}/>  Sign Up with Facebook</button>
        </>
    )}
}
export default Signup;