import React, { Component } from "react";
import Header from "./Header/Header";
import fire from "./Config/Fire.js";
import Login from "./Login/Login";
import { log } from "util";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user"))
    };
    // this.authListener = this.authListener.bind();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      //   console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        // this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  };
  componentDidMount() {
    this.authListener();
  }
  //   componentDidUpdate() {
  //     this.authListener();
  //   }

  //   componentWillReceiveProps(nextProps) {
  //     console.log("recieved props");
  //   }

  render() {
    return (
      <div>
        <Header />
        {this.state.user ? "hello" : <Login />}
      </div>
    );
  }
}

export default Home;
