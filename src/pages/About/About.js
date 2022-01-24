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
    margin: 35,
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
    fontSize: 18,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 15,
      lineHeight: 1,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    lineHeight: 1.2,
    fontFamily: "roboto mono",
  },
  name: {
    marginLeft: theme.spacing(10),
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
        <ScrollAnimation 
            animateIn="fadeIn" 
            animateOut="fadeOut" 
            delay="200"
        >
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                className={classes.container}
            >
                <Typography className={classes.text} align="center">
                    Southern California-based front end web developer, soon relocating
                    to Orlando, FL. Fascinated by innovation with a background in
                    film, art, content creation, and customer service. Currently
                    creating content as a freelance developer for CodeCast.
                </Typography>
                {/* <br /> */}
                <Typography className={classes.text} align="center">
                    With nearly a decade's worth of customer service experience at The
                    Walt Disney Company and Apple, I thrive on constructive feedback,
                    communication, and am always willing to learn new things. I'm a
                    team-player with an eagerness to learn new technologies and
                    dedicated to building user-friendly, responsive apps.
                </Typography>
            </Grid>
        </ScrollAnimation>
        <ScrollAnimation 
            animateIn="fadeIn" 
            animateOut="fadeOut" 
            delay="200"
        >
            <img 
                alt="Michael Tirona" className={classes.img} src={picture} 
            />
        </ScrollAnimation>
        </Grid>
    </div>
  )
}

export default About
