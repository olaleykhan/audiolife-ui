import React, { Component } from "react";
import Input from "../../../components/ui/input/Input";
import Btn from "../../../components/ui/btn/Btn";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../../firebase/firebase.config";

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

  handleSubmit = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password).then(() => {
        this.setState({
          email: "",
          password: "",
        });
        alert("login success");
      });
    } catch (error) {
      console.log("error signing in", error.message);
    }
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
            <Btn type="submit" appearance="orange">
              {" "}
              Submit{" "}
            </Btn>
            <Btn type="button" appearance="google" onClick={signInWithGoogle}>
              Signin With Google
            </Btn>
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
