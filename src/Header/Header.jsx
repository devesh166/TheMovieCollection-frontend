import React, { useState } from "react";
import fire from "../Config/Fire";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            TheMovieCollection
          </Typography>
          <Button   className={classes.title}>
            Discover
          </Button>
          <Button color="inherit">
            <Link to="/Login">Login</Link>
          </Button>
          {currentUser && (
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
