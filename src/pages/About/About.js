import React, { Component } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Navbar from '../../components/Navbar'
import ProjectCard from '../../components/ProjectCard'
import './about.css'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
        maxHeight: 275,
        borderRadius: 200,
        margin: 5
    },
    profile: {
        width: 250,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        // backgroundColor: '#FEAF8A',
        maxWidth: 400
    },
    text: {
        margin: theme.spacing(2)
    },
    title: {
        margin: theme.spacing(5)
    }
}))


const About = props => {
    const classes = useStyles()
    const theme = useTheme()

    return (
    <>
        <Navbar />
        <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            sm={12}
        >
            <img className={classes.img} src={'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/17884179_10156012067398154_8836003987201545848_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_oc=AQlVAdZpNYB7YTRWIZoi7D5CyftdvvqOmYoGr3RSTnnMVlQ7C5jdUfHf3JUmr4oDLYE&_nc_ht=scontent-lax3-2.xx&oh=586160818275b1ba26f6b707ee820dde&oe=5F1BE04B'} />
            <Typography className={classes.text}>
                Front end web developer fascinated by innovation with a background in film and art. Dedicated to building user-friendly, responsive apps. A team-player with an eagerness to learn new technologies. Earned a certificate from UCI's 12-week intensive full stack web development coding boot camp. There I developed skills in React, JavaScript, and responsive web design, along with other essential web development technologies. 
            </Typography>
        </Grid>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            sm={12}
        >
            <Typography className={classes.title} variant="h2">
                Projects
            </Typography>
            <ProjectCard
                name="Dewey"
                description="Full stack library app to search for and save books a user owns. Built using PassPortJS, MongoDB, Mongoose, React, Material-UI, Reactstrap, and the OpenLibrary Search API."
                role="I worked on authentication, sign up and login pages, and the ui."
                GitHub="https://github.com/usrs/Dewey"
                App="http://dewey.works"
            />
            <ProjectCard 
                name="Listivity"
                description="Full stack app that tracks all the activities a user said they wanted to do. Organizes activities by category and allows you to pick an activity at random. Utilizes MySQL, Sequelize, and Bootstrap."
                role="The project was built together by the team in a collaborative setting. Each member of the team took turns coding while sharing their screen and everyone watching assisted"
                GitHub="https://github.com/ShaneMit/Project2"
                App="https://radiant-woodland-54871.herokuapp.com/login.html"
            />
            <ProjectCard 
                name="CoZone"
                description="A front end Covid-19 tracking app that allows the user to search case data by country. Utilizes Google’s Maps JavaScript and Places APIs and the covid19 API."
                role="I worked on integrating both Google APIs. "
                GitHub="https://github.com/TuffLuffJimmy/CoZone"
                App="https://tuffluffjimmy.github.io/CoZone/"
            />
        </Grid>
    </>
    )
}


export default About