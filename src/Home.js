import React, { Component } from "react";
import Discover from "./Discover/Discover";
import Header from "./Header/Header";
import fire from "./Config/Fire.js";
import Login from "./Login/Login";
import { log } from "util";
import SearchBar from "./SearchBar/SearchBar";
import Footer from "./Footer/Footer";
import Pagination from "./Pagination/Pagination";
import Favourite from "./Favourite/Favourite";

// const sortingOptions = {
//   "Popularity Descending": "popularity.desc",
//   "Popularity Ascending": "popularity.asc",
//   "Rating Ascending": "vote_average.asc",
//   "Rating Descending": "vote_average.desc"
// };
const sortingOptions = [
  "popularity.desc",
  "popularity.asc",
  "vote_average.asc",
  "vote_average.desc"
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem("user"),
      isMovie: true,
      sortBy: "popularity.desc",
      pageNo: 1,
      isFavourite: false
    };
    // this.authListener = this.authListener.bind();
  }
  componentDidUpdate(prevProps, prevState) {
    // let currentUser = JSON.parse(localStorage.getItem("user"));
    // if (this.state.user != currentUser) {
    //   console.log("in component did update");
    //   this.setState({ user: currentUser });
    // }
  }

  // authListener = () => {
  //   this.props.authListener();
  //   this.setState({ user: this.props.user });
  //   // this.props.authListener();
  //   // fire.auth().onAuthStateChanged(user => {
  //   //   //   console.log(user);
  //   //   if (user) {
  //   //     this.setState({ user });
  //   //     console.log("logged in");
  //   //   } else {
  //   //     this.setState({ user: null });
  //   //     localStorage.removeItem("user");
  //   //     console.log("logged out");
  //   //   }
  //   // });
  // };

  toggleMovies = () => {
    this.setState({ isMovie: !this.state.isMovie, pageNo: 1 });
  };
  changePage = input => {
    this.setState({ pageNo: input }, () => {
      // console.log(input);
    });
  };
  sortBy = input => {
    // console.log(sortingOptions[input]);
    this.setState({ sortBy: sortingOptions[input] }, () => {
      console.log(this.state.sortBy);
    });
  };
  isFavouriteClicked = () => {
    this.setState({ isFavourite: !this.state.isFavourite });
  };
  //   componentDidUpdate() {
  //     this.authListener();
  //   }

  //   componentWillReceiveProps(nextProps) {
  //     console.log("recieved props");
  //   }

  render() {
    return (
      <div>
        <Header
          auth={this.props.authListener}
          // isFavourite={this.isFavouriteClicked}
        />
        {/* {!this.state.isFavourite && ( */}
        <SearchBar
          togglebtn={() => {
            this.toggleMovies();
          }}
          sortBy={a => {
            this.sortBy(a);
          }}
        />
        {/* )} */}

        {/* {this.state.user ? <p>Welcome</p> : <p>Please Login</p>} */}
        {/* {this.state.isFavourite ? (
          <Favourite />
        ) : ( */}
        <Discover
          isMovie={this.state.isMovie}
          sortBy={this.state.sortBy}
          pageNo={this.state.pageNo}
          user={this.state.user}
        ></Discover>
        {/* )} */}

        <Pagination
          pageNo={this.state.pageNo}
          changePage={a => {
            this.changePage(a);
          }}
        ></Pagination>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
