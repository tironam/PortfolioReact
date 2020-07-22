import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root, classes.bar}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>
                            Michael Tirona
            </Link>
                    </Typography>
                    <Link to="/portfolio" className={classes.link}>
                        <Button color="inherit">Portfolio</Button>
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        <Button color="inherit" >Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar