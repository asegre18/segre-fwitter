import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            component={Link}
            to='/'
            color="inherit">
            About</Button>
          <Button
            to='/discover'
            component={Link}
            color="inherit">
            Discover
          </Button>
          <Button
            to='/search'
            component={Link}
            color="inherit">
            Search
          </Button>
          <Button
            to='/users'
            component={Link}
            color="inherit">
            User
          </Button>
          <Button
            to='/signup'
            component={Link}
            color="inherit">
            Sign Up
          </Button>
          <Button
            to='/signin'
            component={Link}
            color="inherit">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
