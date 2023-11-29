// CartPage.js
import React from "react";
import { useRouter } from "next/router";
import Cart from "./Cart";

const CartPage = () => {
  const router = useRouter();
  const { cart: cartQuery } = router.query;
  console.log("Router Query:", router.query);

  // Parse the cart data from the query parameters
  const cart = cartQuery ? JSON.parse(cartQuery) : [];
  console.log("Cart Page - Cart Data:", cart);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Your Shopping Cart</h1>
      <Cart cart={cart} />
    </div>
  );
};

export default CartPage;
