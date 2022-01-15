import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProjectCard from "../../components/ProjectCard";
import "./about.css";
import picture from "./profile.jpg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { IconButton } from "@material-ui/core";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { html5 } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    marginLeft: 0,
  },
  img: {
    maxHeight: 375,
    borderRadius: 100,
    margin: 5,
    boxShadow: "20px 20px #2F3359",
  },
  profile: {
    width: 250,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // backgroundColor: '#FEAF8A',
    maxWidth: 650,
    background: "rgba(0,0,0,0.1)",
    boxShadow: "20px 20px #2F3359",
  },
  text: {
    margin: theme.spacing(2),
    color: "white",
    textAlign: "center",
  },
  name: {
    margin: theme.spacing(5),
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  title: {
    margin: theme.spacing(5),
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    maxWidth: "475px",
  },
  icon: {
    color: "white",
  },
  iconBtn: {
    color: "white",
    marginBottom: theme.spacing(5),
  },
  tech: {
    color: "white",
    maxWidth: "475px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  contact: {
    marginBottom: theme.spacing(7),
  },
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();

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
            <img className={classes.img} src={picture} />
        </ScrollAnimation>
        </Grid>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        sm={12}
        >
        <ScrollAnimation 
            animateIn="fadeIn" 
            animateOut="fadeOut" 
            delay="200"
        >
            <section id="technology"></section>
            <Typography className={classes.title} variant="h3">
            Technologies
            </Typography>
        </ScrollAnimation>
        <ScrollAnimation 
            animateIn="fadeIn" 
            animateOut="fadeOut" 
            delay="200"
        >
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
        <ScrollAnimation 
        animateIn="fadeIn" 
        animateOut="fadeOut" 
        delay="200"
        >
        <section id="projects"></section>
        <Typography className={classes.title} variant="h2">
            Projects
        </Typography>
        </ScrollAnimation>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        sm={12}
        >
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <ProjectCard
            name="MCU and You"
            description="React site designed as an informational resource for all things related to the Marvel Cinematic Universe. Sections of the site are organized by components with multiple routes to simulate multiple pages. Since many of the pages are content-heavy, they have buttons that will quickly take you to other sections of the page. This site is updated periodically as new information is released."
            role="Built by myself using the technologies mentioned below"
            tech="HTML | CSS | React.JS | Reactstrap | Fontawesome | React-scroll-up | React-router-hash-link | Deployed on Netlify"
            GitHub="https://github.com/tironam/MarvelResource"
            App="https://mcuandyou.com/"
            sm={12}
            />
            <ProjectCard
            name="Tironam Links"
            description="A Linktree clone to use on my personal social media accounts that displays numerous links to different sites in one place. Social media apps like TikTok and Instagram only let you put one link in your profile's bio, so this app allows you to share as many links as you want. Features a mobile first design since it will be viewed primarily from smartphones."
            role="Built by myself using the technologies mentioned below"
            tech="HTML | CSS | React.JS | Reactstrap | Fontawesome | Deployed on Netlify"
            GitHub="https://github.com/tironam/linkpage"
            App="https://tironamlinks.netlify.app"
            sm={12}
            />

            {/* <ProjectCard
                        name="Gift Listr"
                        description="Simple full stack gift wishlist app. Pulls list of gifts from a database and allows you to post gifts to the database. App was designed both as a personal tool to use during the 2020 holiday season and to practice working with the front and back end. Future updates are planned to improve the usability of the app."
                        role="Built by myself using the technologies mentioned below"
                        tech="HTML | CSS | JavaScript | Express | NodeJS | MySQL | Axios | .ENV | Bootstrap | Heroku | JawsDB"
                        GitHub="https://github.com/tironam/christmaslistr"
                        App="https://tranquil-journey-72389.herokuapp.com/"
                        sm={12} /> */}
            {/* </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"> */}
            <ProjectCard
            name="Dewey"
            description="Full stack library app to search for and save books a user owns. Built using PassPortJS, MongoDB, Mongoose, React, Material-UI, Reactstrap, and the OpenLibrary Search API."
            role="I built the authentication with PassportJS, constructed the Sign Up and Login pages, and helped unify UI elements across the app"
            tech="React | Material-UI | Reactstrap | MongoDB | Mongoose | NodeJS | Express | NPM | PassportJS | OpenLibraryAPI"
            GitHub="https://github.com/usrs/Dewey"
            App="http://dewey.works"
            sm={12}
            />
            {/* </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"> */}
            <ProjectCard
            name="Listivity"
            description="Full stack app that tracks all the activities a user said they wanted to do. Organizes activities by category and allows you to pick an activity at random. Utilizes MySQL, Sequelize, and Bootstrap."
            role="The project was built together by the team in a collaborative setting. Each member of the team took turns coding while sharing their screen and everyone watching assisted"
            tech="HTML | CSS | JavaScript | Bootstrap | MySQL | Sequelize | NodeJS | Express | NPM | Animate.CSS"
            GitHub="https://github.com/ShaneMit/Project2"
            App="https://listivity.herokuapp.com/"
            />
            {/* </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"> */}
            <ProjectCard
            name="CoZone"
            description="A front end Covid-19 tracking app that allows the user to search case data by country. Utilizes Google’s Maps JavaScript and Places APIs and the covid19 API."
            role="I integrated both Google APIs, including integrating the search form so it accessed both the covid19 API and the Places API"
            tech="HTML | CSS | JavaScript | Materialize | Google Maps JavaScript API | Google Places API | covid19 API"
            GitHub="https://github.com/TuffLuffJimmy/CoZone"
            App="https://tuffluffjimmy.github.io/CoZone/"
            />
        </ScrollAnimation>
        </Grid>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        sm={12}
        >
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <section id="contact"></section>
            <Typography className={classes.title} variant="h2" align="center">
            Let's work together
            </Typography>
        </ScrollAnimation>
        </Grid>

        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        textAlign="center"
        sm={12}
        >
        <Paper className={classes.paper}>
            <IconButton
            href="mailto:tironamichael@gmail.com"
            className={classes.iconBtn}
            >
            <EmailIcon fontSize="large" />
            </IconButton>
            <IconButton
            href="https://twitter.com/tironacodes"
            className={classes.iconBtn}
            target="_blank"
            >
            <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
            href="https://github.com/tironam"
            className={classes.iconBtn}
            target="_blank"
            >
            <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
            href="https://www.linkedin.com/in/michael-tirona-9990a7101/"
            className={classes.iconBtn}
            target="_blank"
            >
            <LinkedInIcon fontSize="large" />
            </IconButton>
            <Button
            href="https://www.upwork.com/freelancers/~015d0ebc71e45c1972"
            className={classes.iconBtn}
            >
            Upwork
            </Button>
            <Button
            href="https://www.fiverr.com/tironam"
            className={classes.iconBtn}
            >
            Fiverr
            </Button>
            <Button
            href="https://www.codecast.io/users/tironam"
            className={classes.iconBtn}
            >
            CodeCast
            </Button>
        </Paper>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
        <CopyrightIcon className={classes.icon} />
        <Typography className={classes.text}>
            Michael Tirona 2022. All Rights Reserved.
        </Typography>
        </Grid>
        </>
  );
};

export default About;
