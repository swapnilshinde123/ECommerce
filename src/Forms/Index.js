import React, { useState } from 'react'
import "./style.css"
import OTP from "./OTP";
import logo from "../Assets/0001.jpg"
import web_logo from "../Assets/logo_transparent.png"



function Index() {

const [email, setEmail] = useState("");
const [password,setPassword] = useState("");

function handleChange(e)
{
    console.log(e.target.value);
    setEmail(e.target.value);
}

    return (
        <div className="main">
            <div className="first">
                <img src={logo} className="back__img" />
            </div>
            <div className="second">
                <h2>Login</h2>
                <div className="signup__form">
                    <label htmlFor="email">Email*</label>
                    <input type="text" id="email" placeholder="Enter Registered Email" onChange={handleChange}/>
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" placeholder="Enter Password"/>
                    <label htmlFor="otp">Verify OTP*</label>
                    <label id="o">OTP Is Sent To {"+918668668143"}</label>
                    <div className="App">
                        <OTP />
                    </div>
                    <span id="button">
                    <div id="first" class="buttonBox">
                        <button>Login</button>
                        <div class="border"></div>
                        <div class="border"></div>
                    </div>
                    </span>
                </div>
            </div>
            <div className="third">
                <div>
                    <img className="weblogo" src={web_logo} alt=""/>
                </div>
            </div>
        </div>
    )
}


export default Index
