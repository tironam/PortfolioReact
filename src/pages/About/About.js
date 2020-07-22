import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
    },
    profile: {
        width: 250,
    }
}))


const About = () => {
    const classes = useStyles()
    const theme = useTheme()

    return (
    <>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
                <img className={classes.img} src={'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/17884179_10156012067398154_8836003987201545848_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_oc=AQlVAdZpNYB7YTRWIZoi7D5CyftdvvqOmYoGr3RSTnnMVlQ7C5jdUfHf3JUmr4oDLYE&_nc_ht=scontent-lax3-2.xx&oh=586160818275b1ba26f6b707ee820dde&oe=5F1BE04B'} />
        </Grid>
    </>
    )
}

export default About