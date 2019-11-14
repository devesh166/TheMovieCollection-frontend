import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Card from "../Discover/Card";
import Header from "../Header/Header";
import "./style.css";

class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
  }
  componentWillMount() {
    let url = `http://localhost:8080/get?email=${localStorage.getItem("user")}`;
    axios.get(url).then(res => {
      //   console.log(res);
      this.setState({ movieList: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <CssBaseline />
        {/* <Container maxWidth="sm"> */}
        <div className="container ">
          <div className=" row   ">
            {this.state.movieList &&
              this.state.movieList.map(movie => {
                {
                  console.log(this.props);
                }
                return (
                  <div className="cardMargin ">
                    <Card movie={movie.movieObj} isFavouritComponent="true" />
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Favourite;
