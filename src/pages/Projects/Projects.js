import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../../components/ProjectCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: 35,
  },
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    color: "white",
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "roboto mono, thin",
  },
}));

const Projects = (props) => {
    const classes = useStyles()
    
    return (
      <div className={classes.section}>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="200">
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
          // className={classes.projects}
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
      </div>
    );
}

export default Projects