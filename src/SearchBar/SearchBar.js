import React, { Component } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import { makeStyles } from "@material-ui/core/styles";

const StyledToggleButtonGroup = withStyles(theme => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    padding: theme.spacing(0, 1),
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius
    }
  }
}))(ToggleButtonGroup);

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  root: {
    width: "30%",
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper
  }
}));

const options = [
  "Popularity Descending",
  "Popularity Ascending",
  "Rating Ascending",
  "Rating Descending"
];
export default function SearchBar(props) {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    // console.log(event, newAlignment);
    setAlignment(newAlignment);
    props.togglebtn();
  };

  //https://api.themoviedb.org/3/discover/tv?api_key=3f0ed9ef83397a096a0f30ae5f322b56&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    props.sortBy(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="container justify-content-center"
      style={{ margin: "15px", display: "inline-block" }}
    >
      {/* <span>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Search"
          margin="normal"
        />
      </span> */}

      <StyledToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          Movies
        </ToggleButton>
        <ToggleButton value="right" aria-label="centered">
          TV Shows
        </ToggleButton>
      </StyledToggleButtonGroup>

      <div className={classes.root} style={{ float: "right", padding: "0px" }}>
        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="Sort By"
              secondary={options[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === selectedIndex}
              selected={index === selectedIndex}
              onClick={event => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      {/* <div>
        <TextField
          id="filled-basic"
          className={classes.textField}
          label="Filled"
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Outlined"
          margin="normal"
          variant="outlined"
        />
      </div> */}
    </div>
  );
}

// export default SearchBar;
