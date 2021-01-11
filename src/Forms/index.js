import React from 'react'
import "./style.css"
import logo from "../Assets/0001.jpg"
function index() {
    return (
        <div className="main">
            <div className="first">
                <img src={logo} className="back__img"/>
            </div>
            <div className="second">
                <h2>Login</h2>
                <div className="signup__form">
                    <label htmlFor="email">Email*</label>
                    <input type="text" id="email"  />
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password"  />
                    <label htmlFor="otp">Verify OTP*</label>
                    <input type="number" id="otp" maxLength="6"/>
                    <span id="button">
                        <input className="button2" type="submit" id="sub" value="Submit" />
                    </span>
                </div>
            </div>
            <div className="third">
                {/* <img src={logo} className="back__img1"/> */}
            </div>
        </div>
    )
}

    
export default index
