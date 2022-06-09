import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";

const products = [
  {
    id: 1,
    name: "macBook",
    desc: "Apple macBook pro",
    price: "$20",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "GShock",
    desc: "GShock Watch",
    price: "$5",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          //   console.log(product.name)
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
