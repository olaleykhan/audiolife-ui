import React, { Component } from "react";
import Input from "../../../components/ui/input/Input";
import Btn from "../../../components/ui/btn/Btn";
import { Link } from "react-router-dom";

import "./SignIn.scss";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submittiing");
  };
  render() {
    return (
      <div className="sign-in container">
        <h2> I already have an account </h2>
        <span> fill in your details below </span>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Please input your email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <Input
            name="password"
            type="password"
            placeholder="input password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            label="password"
          />
          <div className="submit-btns">
            <Btn type="orange"> Submit </Btn>
            {/* <Button type="button" behaviour="google">
              Signin With Google
            </Button> */}
          </div>
        </form>

        <p className="join">
          New to Audio life? sign up
          <Link to="sign-up">
            <span className="text-primary"> Here </span>
          </Link>
        </p>
      </div>
    );
  }
}

export default SignIn;
