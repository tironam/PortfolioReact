import React from 'react'
import { Link } from '@material-ui/core'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import {ThemeProvider } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { IconButton } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#f44336"
        }
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    bar: {
        marginBottom: 20
    },
    iconBtn: {
        color: 'white'
    }
}))



const Navbar = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" className={classes.bar} color="secondary">
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Michael Tirona
                                </Typography>
                                <IconButton href="https://github.com/tironam" className={classes.iconBtn} target="_blank">
                                    <GitHubIcon  />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/michael-tirona-9990a7101/" className={classes.iconBtn} target="_blank">
                                    <LinkedInIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
        </ThemeProvider>
    )
}

export default Navbar