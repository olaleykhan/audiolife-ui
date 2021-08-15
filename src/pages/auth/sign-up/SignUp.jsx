import React, { Component } from "react";

import Input from "../../../components/ui/input/Input";
import Btn from "../../../components/ui/btn/Btn";

import "./SignUp.scss";

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2> Sign up if you don't have an account</h2>
        <p>Please fill in your details below</p>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="displayName"
            type="text"
            placeholder="Please input your full name"
            value={displayName}
            required
            handleChange={this.handleChange}
            label="full Name"
          />
          <Input
            name="email"
            type="email"
            placeholder="Please input your email"
            value={email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Please input your password"
            value={password}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Please confirm your Password"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
            label="confirm password"
          />

          <div className="submit-btns">
            <Btn type="orange"> Submit </Btn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
