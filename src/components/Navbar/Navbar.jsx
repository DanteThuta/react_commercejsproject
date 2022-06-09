import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography className={classes.title} color="inherit">
            <img
              src=""
              alt="CommerceJS"
              height="25px"
              className={classes.image}
            />
            CommerceJs
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <ShoppingCart />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      ;
    </>
  );
};

export default Navbar;
