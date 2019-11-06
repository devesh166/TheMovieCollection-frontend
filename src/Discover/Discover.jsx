import React, { Component } from "react";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "./Card";
import "./style.css";

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
  }
  componentWillMount() {
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=3f0ed9ef83397a096a0f30ae5f322b56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(url).then(res => {
      //   console.log(res);
      this.setState({ movieList: res.data.results });
    });
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {/* <Container maxWidth="sm"> */}
        <div className="container ">
          <div className=" row   ">
            {this.state.movieList &&
              this.state.movieList.map(movie => {
                {
                  console.log(movie);
                }
                return (
                  <div
                    // key={JSON.stringify(movie.id)}

                    className="cardMargin "
                  >
                    <Card movie={movie} />
                  </div>
                );
              })}
          </div>
        </div>
        {/* </Container> */}
      </React.Fragment>
    );
  }
}

export default Discover;
