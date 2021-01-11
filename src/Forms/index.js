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
                    <input type="password" id="otp" maxLength="6"/>
                </div>
                    <button className="action-button shadow animate blue">Login</button>
            </div>
            <div className="third">
                {/* <img src={logo} className="back__img1"/> */}
            </div>
        </div>
    )
}

    
export default index
