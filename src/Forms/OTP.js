import React, { Component } from "react";
import OtpInput from "react-otp-input";
import "./otp.css"

export default class OTP extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div className="main1">
        <OtpInput
          inputStyle="otp"
          value={this.state.otp}
          onChange={this.handleChange}
          numInputs={6}
          separator={<span>-</span>}
          isInputSecure='true'
          isInputNum="true"
          placeholder="******"
        />
      </div>
    );
  }
}
