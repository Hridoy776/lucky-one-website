import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Library.css'
const Library = () => {
    const [books, setBooks]=useState([])
    const[cart, setCart]=useState([])
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    const addToCart =book=>{
        const newCart =[...cart,book];
        setCart(newCart)
    }
    return (
        <div className='library'>
            <div className='book-container'>
            {
                books.map(book=><Books key={book.id} book={book} addToCart={addToCart}></Books>)
            }
            </div>
            <div className='cart-container'>
            {
                cart.map(selectedCart=><Cart selectedCart={selectedCart} key={selectedCart.id}></Cart>)
            }
            </div>
        </div>
    );
};

export default Library;