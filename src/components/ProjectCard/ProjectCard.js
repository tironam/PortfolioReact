import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import Web from "@material-ui/icons/Web";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    maxWidth: 450,
    borderRadius: "20px",
    margin: theme.spacing(3),
    background: "rgba(0,0,0,0.1)",
    boxShadow: "20px 20px #2F3359",
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  title: {
    color: "black",
  },
  label: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: 18,
    color: "white",
    fontFamily: "roboto mono",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      fontSize: 14,
      lineHeight: 1.3,
    },
  },
  text: {
    margin: theme.spacing(1),
    fontSize: 18,
    color: "white",
    fontFamily: "roboto mono",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      lineHeight: 1.3,
    },
  },
  private: {
    margin: theme.spacing(0),
    fontSize: 12,
    color: "white",
    fontFamily: "roboto mono",
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      lineHeight: 1.3,
    },
  },
  name: {
    marginTop: theme.spacing(2),
    fontSize: 27,
    color: "white",
    fontFamily: "roboto mono",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      marginTop: theme.spacing(2),
    },
  },
  iconBtn: {
    color: "white",
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.name}>
          {props.name}
        </Typography>
        <Typography className={classes.label}>{props.description}</Typography>
        <Typography variant="h6" className={classes.label}>
          My role:
        </Typography>
        <Typography className={classes.text}>{props.role}</Typography>
        <Typography variant="h6" className={classes.label}>
          Technologies used:
        </Typography>
        <Typography className={classes.text}>{props.tech}</Typography>
        <Typography variant="h6" className={classes.label}>
          {props.GitHub === "" ? "Deployed App:" : "Repo and Deployed App:"}
        </Typography>
        <IconButton
          href={props.GitHub}
          className={classes.iconBtn}
          target="_blank"
        >
          {props.GitHub === "" ? (
            <Typography className={classes.private} disabled="true">
              Repository is private
            </Typography>
          ) : (
            <GitHubIcon fontSize="large" />
          )}
        </IconButton>
        <IconButton
          href={props.App}
          className={classes.iconBtn}
          target="_blank"
        >
          <Web fontSize="large" />
        </IconButton>
      </Paper>
    </>
  );
};
export default ProjectCard;
