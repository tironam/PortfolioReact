import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: 35,
  },
  text: {
    marginTop: 40,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "roboto mono",
    [theme.breakpoints.down("xs")]: {
      fontSize: 11,
    },
  },
  icon: {
    marginTop: 40,
    marginRight: 5,
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const date = new Date().getFullYear();

  return (
    <div className={classes.section}>
      <Grid container direction="row" justify="center" alignItems="center">
        <CopyrightIcon className={classes.icon} />
        <Typography className={classes.text}>
          Michael Tirona {date}. All Rights Reserved.
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
