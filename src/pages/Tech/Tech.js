import React, { Component } from 'react'
import useStyles from '../../components/Styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import Paper from "@material-ui/core/Paper";

const Tech = () => {
    const classes = useStyles()

    return (
      <>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          sm={12}
        >
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="200">
            <section id="technology"></section>
            <Typography className={classes.title} variant="h3">
              Technologies
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="200">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              sm={12}
            >
              <Paper className={classes.paper}>
                <Typography variant="h2" className={classes.tech}>
                  <i className="devicon-html5-plain-wordmark"> </i>
                  <i className="devicon-css3-plain-wordmark"> </i>
                  <i className="devicon-javascript-plain"> </i>
                  <i className="devicon-react-original-wordmark"> </i>
                  <i className="devicon-bootstrap-plain-wordmark"> </i>
                  <i className="devicon-nodejs-plain-wordmark"> </i>
                  <i className="devicon-express-original-wordmark"> </i>
                  <i className="devicon-npm-original-wordmark"> </i>
                  <i className="devicon-mongodb-plain-wordmark"> </i>
                </Typography>
                <Typography variant="h6" className={classes.tech}>
                  Reactstrap | Mongoose | Netlify
                </Typography>
              </Paper>
            </Grid>
          </ScrollAnimation>
        </Grid>
      </>
    );
}

export default Tech