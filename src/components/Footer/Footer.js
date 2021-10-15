import React from 'react'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CopyrightIcon from '@material-ui/icons/Copyright';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        top: "auto",
        bottom: 0,
    },
    title: {
        textAlign: "center",
        verticalAlign: "middle",
        display: "inline-flex"
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root, classes.appBar}>
            <AppBar position="bottom" color="null">
                <Toolbar>
                    <Typography color="white" position="static" className={classes.title}>
                        <span><CopyrightIcon />     </span>  Michael Tirona 2020
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer