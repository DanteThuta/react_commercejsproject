import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
// Components
import { Navbar, Products, Cart } from "./components";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log();
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleToAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart); //why also Cart?
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} clickCartHandle={handleToAddCart} /> */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
