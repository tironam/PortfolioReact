import React from 'react'
import useStyles from '../../components/Styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CopyrightIcon from '@material-ui/icons/Copyright'

const Footer = () => {
    const classes = useStyles()

    return (
      <div className={classes.section}>
        <Grid container direction="row" justify="center" alignItems="center">
          <CopyrightIcon className={classes.icon} />
          <Typography className={classes.text}>
            Michael Tirona 2022. All Rights Reserved.
          </Typography>
        </Grid>
      </div>
    );
}

export default Footer
