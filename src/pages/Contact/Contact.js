import React from 'react'
import useStyles from '../../components/Styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import EmailIcon from '@material-ui/icons/Email'
import { IconButton } from '@material-ui/core'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Contact = () => {
    const classes = useStyles()

    return (
      <div className={classes}>
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
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Paper className={classes.paper}>
            <IconButton
              href="mailto:tironamichael@gmail.com"
              className={classes.iconBtn}
            >
              <EmailIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <IconButton
              href="https://twitter.com/tironacodes"
              className={classes.iconBtn}
              target="_blank"
            >
              <TwitterIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <IconButton
              href="https://github.com/tironam"
              className={classes.iconBtn}
              target="_blank"
            >
              <GitHubIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/michael-tirona-9990a7101/"
              className={classes.iconBtn}
              target="_blank"
            >
              <LinkedInIcon 
                fontSize="large" 
                className={classes.icon} 
              />
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
          </ScrollAnimation>
        </Grid>
      </div>
    );
}

export default Contact