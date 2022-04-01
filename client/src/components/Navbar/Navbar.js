import React from "react";
import { AppBar, Avatar, Typography, Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import memories from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Race Report
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height={60}
          width={60}
        />
      </div>
      <Toolbar className={classes.tollBar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.resutl.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.login}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
