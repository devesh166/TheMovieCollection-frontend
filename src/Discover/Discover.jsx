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
      movieList: [],
      likedList: []
    };
  }
  componentWillMount() {
    let likedId = [];
    let likedMovies = [];
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=3f0ed9ef83397a096a0f30ae5f322b56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(url).then(res => {
      //   console.log(res);
      this.setState({ movieList: res.data.results });
    });

    let likedUrl = `http://localhost:8080/get?email=${localStorage.getItem(
      "user"
    )}`;
    axios.get(likedUrl).then(res => {
      console.log(res.data);
      //
      likedMovies = res.data;
      likedMovies.map((ele, ind) => {
        likedId[ind] = ele.movieId;
      });
      this.setState({ likedList: likedId }, () => {
        // console.log(this.state.likedList);
      });
    });
  }
  // componentDidUpdate(props) {
  //   console.log("reoved lovcal store");
  //   if (localStorage.getItem("user") === null) {
  //     console.log("reoved lovcal store");
  //     // let likedId = [];
  //     // let likedMovies = [];
  //     // let likedUrl = `http://localhost:8080/get?email=${localStorage.getItem(
  //     //   "user"
  //     // )}`;
  //     // axios.get(likedUrl).then(res => {
  //     //   console.log(res.data);
  //     //   //
  //     //   likedMovies = res.data;
  //     //   likedMovies.map((ele, ind) => {
  //     //     likedId[ind] = ele.movieId;
  //     //   });
  //     //   this.setState({ likedList: likedId }, () => {
  //     //     // console.log(this.state.likedList);
  //     //   });
  //     // });
  //   }
  // }
  addToFavourites(id, obj) {
    console.log();
    // e.target.disabled = true;
    let url = "http://localhost:8080/add";
    axios
      .post(url, {
        emailId: localStorage.getItem("user"),
        movieId: id,
        movieObj: obj
      })
      .then(res => {})
      .catch(err => {
        console.log(err);
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
                // {
                //   this.state.likedList &&
                //     console.log(
                //       "is inclueded " + this.state.likedList.includes(movie.id)
                //     );
                // }
                return (
                  <div className="cardMargin ">
                    <Card
                      isLiked={
                        this.state.likedList
                          ? this.state.likedList.includes(movie.id)
                          : false
                      }
                      key={movie.id}
                      onclick={() => {
                        this.addToFavourites(movie.id, movie);
                      }}
                      movie={movie}
                      isFavouritComponent="false"
                    />
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
