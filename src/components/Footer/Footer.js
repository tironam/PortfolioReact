import React from 'react'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        top: "auto",
        bottom: 0
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root, classes.appBar}>
            <AppBar position="bottom" color="null">
                <Toolbar>
                    <Typography color="white" alignItems="center">
                        Copyright 2020 Michael Tirona
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer