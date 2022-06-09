import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Cart = ({ cart }) => {
  //   const isEmpty = !cart.line_items.length;
  const classes = useStyles();
  //   console.log(cart  );

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no Items in your Shopping Cart.
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          {" "}
          Your SubTotal is : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            color="secondary"
            variant="contained"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            color="primary"
            variant="contained"
          >
            CheckOut
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "loading....";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" className={classes.title}>
        Your Shopping Cart:
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
