import React, { useState } from "react";
import fire from "../Config/Fire";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  let logout = () => {
    fire
      .auth()
      .signOut()
      .then(
        function() {
          localStorage.removeItem("user");
          setcurrentUser(null);
        },
        function(error) {
          // An error happened.
        }
      );
  };

  const classes = useStyles();
  // let currentUser =
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title}>TheMovieCollection</Typography>
          <Typography style={{ flexGrow: "6" }}>
            <Button variant="h6" color="inherit">
              Discover
            </Button>
          </Typography>

          {currentUser ? (
            <div>
              <Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Button>
              <Button onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Button color="inherit">
              <Link to="/Login">Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
