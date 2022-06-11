import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateQuantity, onRemoveQuantity }) => {
  const classes = useStyles();
  // console.log(item);
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button
            size="small"
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            size="small"
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => onRemoveQuantity(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
