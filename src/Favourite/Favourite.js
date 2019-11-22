import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Card from "../Discover/Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";

class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
  }
  removeFavourites(id) {
    console.log();
    // e.target.disabled = true;
    let url = "http://localhost:8080/delete";
    axios
      .post(url, {
        emailId: JSON.parse(localStorage.getItem("user")),
        movieId: id
      })
      .then(res => {
        let { movieList } = this.state;
        movieList = movieList.filter(ele => {
          if (ele.movieId == id) {
            return false;
          }
          return true;
        });

        this.setState({ movieList });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentWillMount() {
    console.log(this.props);
    let url = `http://localhost:8080/get?email=${JSON.parse(
      localStorage.getItem("user")
    )}`;
    axios.get(url).then(res => {
      //   console.log(res);
      this.setState({ movieList: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header auth={this.props.authListener} />
        <CssBaseline />
        {/* <Container maxWidth="sm"> */}
        <div className="container ">
          <div className=" row   ">
            {this.state.movieList &&
              this.state.movieList.map(movie => {
                {
                  // console.log(this.props);
                }
                return (
                  <div className="cardMargin ">
                    <Card
                      movie={movie.movieObj}
                      isFavouritComponent="true"
                      removeFavourites={id => {
                        this.removeFavourites(id);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Favourite;
