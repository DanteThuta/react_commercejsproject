import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import { Navbar, Products, Cart, Checkout } from "./components";
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
    // console.log("Added to Cart");
  };

  const handletoUpdateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
    console.log("Update work");
  };

  const handletoRemoveCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handletoEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products products={products} clickCartHandle={handleToAddCart} />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handletoUpdateCart={handletoUpdateCart}
                handletoRemoveCart={handletoRemoveCart}
                handletoEmptyCart={handletoEmptyCart}
              />
            }
          />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
