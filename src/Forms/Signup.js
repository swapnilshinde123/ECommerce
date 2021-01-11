import React from 'react'
import "./style1.css"
import OTP from "./OTP";
import logo from "../Assets/0001.jpg"
import web_logo from "../Assets/logo_transparent.png"

function index() {
    return (
        <div className="main">
            <div className="first">
                <img src={logo} className="back__img" />
            </div>
            <div className="second">
                <h2>Register</h2>
                <form action="get">
                    <div className="signup__form">
                        <label htmlFor="email">Email*</label>
                        <input type="text" id="email" placeholder="name@example.com" />
                        <label htmlFor="password">Password*</label>
                        <input type="password" id="password" placeholder="Atleast 8 Characters" />
                        <label htmlFor="mobile">Mobile Number*</label>
                        <input type="text" id="mobile" placeholder="+91-8668668143" />
                        <label htmlFor="otp">Verify OTP*</label>
                        <div className="App">
                            <OTP />
                        </div>
                        <span id="button">
                        <div id="first" class="buttonBox">
                            <button>Create Account</button>
                            <div class="border"></div>
                            <div class="border"></div>
                        </div>
                        </span>
                    </div>
                </form>
            </div>
            <div className="third">
                <div>
                    <img className="weblogo" src={web_logo} alt=""/>
                </div>
            </div>
        </div>
    )
}


export default index
