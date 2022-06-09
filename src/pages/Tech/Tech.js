import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: 35,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    maxWidth: 600,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 275,
    },
    background: "rgba(0,0,0,0.1)",
    boxShadow: "20px 20px #2F3359",
  },
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    color: "white",
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "roboto mono",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  container: {
    maxWidth: "475px",
  },
  tech: {
    color: "white",
    maxWidth: "475px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "roboto mono",
  },
  misc: {
    color: "white",
    maxWidth: "475px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "roboto mono",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      wordSpacing: -3,
    },
  },
}));

const Tech = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        sm={12}
      >
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="200">
          <section id="technology"></section>
          <Typography className={classes.title} variant="h2">
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
                <i className="devicon-typescript-plain"> </i>
                <i className="devicon-react-original-wordmark"> </i>
                <i className="devicon-bootstrap-plain-wordmark"> </i>
                <i className="devicon-nodejs-plain-wordmark"> </i>
                <i className="devicon-npm-original-wordmark"> </i>
              </Typography>
              <Typography variant="h6" className={classes.misc}>
                Styled-Components | Storybook | Material UI | Netlify
              </Typography>
            </Paper>
          </Grid>
        </ScrollAnimation>
      </Grid>
    </div>
  );
};

export default Tech;
