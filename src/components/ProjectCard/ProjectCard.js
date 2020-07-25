import React from 'react'
import { Link } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import Web from '@material-ui/icons/Web'
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        // backgroundColor: '#FEAF8A',
        maxWidth: 400,
        margin: theme.spacing(3)
    },
    text: {
        margin: theme.spacing(1)
    },
    title: {
        margin: theme.spacing(5)
    },
    iconBtn: {
        color: 'black'
    }
}))


const ProjectCard = props => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <>
            <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.text}>
                    {props.name}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
                <Typography variant="h6" className={classes.text}>
                    My role:
                </Typography>
                <Typography>
                    {props.role}
                </Typography>
                <Typography variant="h6" className={classes.text}>
                    Repository and Deployed App:
                </Typography>
                <IconButton href={props.GitHub} className={classes.iconBtn} target="_blank">
                    <GitHubIcon fontSize="large" color="primary" />
                </IconButton>
                <IconButton href={props.App} className={classes.iconBtn} target="_blank">
                    <Web fontSize="large" color="secondary" />
                </IconButton>
            </Paper>
        </>
    )
}
export default ProjectCard