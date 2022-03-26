import React, { useEffect, useState } from "react";
import Books from "../Books/Books";
import Cart from "../Cart/Cart";

import "./Library.css";
const Library = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const addToCart = (book) => {
    const newCart = [...cart, book];
    setCart(newCart);
  };
  function randomCart(cart) {
    const randomCarts = [...cart];
    const selectedBook =
      randomCarts[Math.floor(Math.random() * randomCarts.length)];
    const Book = [selectedBook];
    setCart(Book);
  }
  const chooseAgain = () => {
    setCart([]);
  };
  return (
    <div className="library">
      <div className="book-container">
        {books.map((book) => (
          <Books key={book.id} book={book} addToCart={addToCart}></Books>
        ))}
      </div>
      <div className="cart-container">
        <div className="child-cart">
        <h3>selected book</h3>
        {cart.map((selectedCart) => (
          <Cart selectedCart={selectedCart} key={selectedCart.id}></Cart>
        ))}

        <button onClick={() => randomCart(cart)}>choose 1 for me</button>
        <button onClick={chooseAgain}>choose again</button>
        </div>
      </div>
    </div>
  );
};

export default Library;
