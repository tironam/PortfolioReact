import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Navbar from '../../components/Navbar'
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
        maxHeight: 300,
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
    }
}))


const About = () => {
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
            <Paper className={classes.paper}>
                <img className={classes.img} src={'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/17884179_10156012067398154_8836003987201545848_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_oc=AQlVAdZpNYB7YTRWIZoi7D5CyftdvvqOmYoGr3RSTnnMVlQ7C5jdUfHf3JUmr4oDLYE&_nc_ht=scontent-lax3-2.xx&oh=586160818275b1ba26f6b707ee820dde&oe=5F1BE04B'} />
                <Typography>
                        Front end web developer fascinated by innovation with a background in film and art. Dedicated to building user-friendly, responsive apps. A team-player with an eagerness to learn new technologies. Earned a certificate from UCI's 12-week intensive full stack web development coding boot camp. There I developed skills in React, JavaScript, and responsive web design, along with other essential web development technologies. 
                </Typography>
            </Paper>
        </Grid>
    </>
    )
}

export default About