import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StoreIcon from '@material-ui/icons/Store';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Appbar = ()=>{
    const classes = useStyles();
            return(
                <div>
                <AppBar position="static" color="inherit">
                  <Toolbar >
                  <img src="/logo.png" />
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <StoreIcon />
                      <Typography variant="h6" className={classes.title}>
                        Phase 1, Sushant Lok
                    </Typography>
                    </IconButton>
                    <Typography className={classes.title}/>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </div>
            )
}


export default Appbar
