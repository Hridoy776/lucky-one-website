import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Library.css'
const Library = () => {
    const [books, setBooks]=useState([])
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className='library'>
            <div className='book-container'>
            {
                books.map(book=><Books key={book.id} book={book}></Books>)
            }
            </div>
            <div className='cart-container'>
            <Cart></Cart>
            </div>
        </div>
    );
};

export default Library;