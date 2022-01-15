import React from "react";
import useStyles from '../../components/Styles'
import "./about.css";
import picture from "./profile.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";

const About = (props) => {
  const classes = useStyles();

  return (
    <>
        <Typography className={classes.name} variant="h3" align="center">
            Hi, I'm Michael Tirona
        </Typography>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        sm={12}
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
    </>
  );
};

export default About;
