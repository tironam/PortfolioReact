import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import './about.css'
import picture from './profile.jpg'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ScrollAnimation from 'react-animate-on-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  section: {
    margin: 5,
  },
  img: {
    maxHeight: 375,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 325,
    },
    borderRadius: 100,
    margin: 15,
    boxShadow: "20px 20px #2F3359",
  },
  profile: {
    width: 250,
  },
  text: {
    margin: 10,
    color: "white",
    fontSize: 20,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 16,
      lineHeight: 1.3,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    lineHeight: 1.2,
    fontFamily: "roboto mono",
  },
  name: {
    marginLeft: theme.spacing(14),
    color: "white",
    fontSize: 45,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      fontSize: 23,
      margin: theme.spacing(1),
      textAlign: "center",
    },
    fontWeight: "bold",
    fontFamily: "roboto mono, thin",
  },
  about: {
    margin: "20px 0px 20px 0px",
  },
  container: {
    maxWidth: "475px",
  },
}));

const About = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <Typography className={classes.name} variant="h3" align="center">
        Hi, I'm Michael Tirona
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        sm={12}
        className={classes.about}
      >
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="200">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.container}
          >
            <Typography className={classes.text} align="center">
              I'm a front end web developer that's fascinated by innovation with
              a background in customer service and content creation.
              With a decade's worth of extensive customer service experience at The
              Walt Disney Company and Apple, I'm a team player that thrives on constructive feedback, communication, and am always willing to learn new things.
            </Typography>
            {/* <br /> */}
            <Typography className={classes.text} align="center">
              Currently based out of Southern California, I'll soon be making
              the move to Orlando, FL. Open to freelance and full time
              opportunities, both local and remote. At the moment, I'm creating content as a freelance developer for CodeCast.
            </Typography>
          </Grid>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="200">
          <img alt="Michael Tirona" className={classes.img} src={picture} />
        </ScrollAnimation>
      </Grid>
    </div>
  );
}

export default About
