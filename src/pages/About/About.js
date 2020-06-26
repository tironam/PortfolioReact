import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
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
        marginTop: 15,
    },
})


const About = () => {
    const classes = useStyles()
    const bull =<span className={classes.bullet}>.</span>

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Card className={classes.root, classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Front end web developer, fascinated by innovation and inspired by challenge. Studied full stack web development at a 12 week coding bootcamp at UCI's school of continuing education, where I became versed in HTML, CSS, JavaScript, NodeJS, Express, MySQL, Sequelize, NoSQL, MongoDB, Mongoose, and ReactJS.
                        </Typography>
                        {/* <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                        </Typography> */}
                        {/* <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography> */}
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </Grid>
        </Grid>
        
    )
}

export default About