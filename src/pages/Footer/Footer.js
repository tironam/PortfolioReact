import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(2),
    color: "white",
    textAlign: "center",
  },
  icon: {
    color: "white",
  }
}));

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <CopyrightIcon className={classes.icon} />
            <Typography className={classes.text}>
            Michael Tirona 2022. All Rights Reserved.
            </Typography>
        </Grid>
    );
};

export default Footer;
