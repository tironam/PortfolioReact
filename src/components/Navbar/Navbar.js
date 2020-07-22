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
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    bar: {
        marginBottom: 20,
    },
    iconBtn: {
        color: 'white'
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root, classes.bar}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Michael Tirona
                    </Typography>
                    <IconButton href="https://github.com/tironam" className={classes.iconBtn}>
                        <GitHubIcon  />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/michael-tirona-9990a7101/" className={classes.iconBtn}>
                        <LinkedInIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar