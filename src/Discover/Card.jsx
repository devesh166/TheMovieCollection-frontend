import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  // console.log(props.isLiked);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [color, setcolor] = useState("");
  const [isDisabled, setisDisabled] = useState(false);

  useEffect(() => {
    setcolor(props.isLiked ? "error" : "");
    setisDisabled(props.isLiked ? true : false);
  }, [props.isLiked]);
  // setcolor(props.isLiked ? "error" : "");
  // setisDisabled(props.isLiked ? true : false);
  // console.log(props.isLiked);
  return (
    <div className="">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          //   action={
          //     // <IconButton aria-label="settings">
          //     //   <MoreVertIcon />
          //     // </IconButton>
          //   }
          title={props.movie.title}
          subheader={props.movie.vote_average + "/10"}
        />
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {props.isFavouritComponent === "false" && (
            <button
              style={{ backgroundColor: "white", border: "none" }}
              disabled={isDisabled}
              onClick={() => {
                setcolor("error");
                setisDisabled(true);
                props.onclick();
              }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color={color} />
              </IconButton>
            </button>
          )}
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{props.movie.overview}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
