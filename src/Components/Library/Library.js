import React, { useEffect, useState } from "react";
import Books from "../Books/Books";
import Cart from "../Cart/Cart";
import ChoosenItem from "../Choosen item/ChoosenItem";
import "./Library.css";
const Library = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [item,setItem]= useState([])
  
  
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
      setItem(selectedBook)
      
  }
  return (
    <div className="library">
      <div className="book-container">
        {books.map((book) => (
          <Books key={book.id} book={book} addToCart={addToCart}></Books>
        ))}
      </div>
      <div className="cart-container">
        <h3>selected book</h3>
        {
        cart.map(selectedCart => <Cart selectedCart={selectedCart} key={selectedCart.id} ></Cart>
        )}
        
        <button onClick={()=>randomCart(cart)}>choose 1 for me</button>
        <ChoosenItem selectedItem={item}></ChoosenItem>
      </div>
    </div>
  );
};

export default Library;
