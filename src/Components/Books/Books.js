import React from 'react';
import './Books.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Books = (props) => {
    const {book, addToCart}=props
    const{name,img,price}=book;
    return (
        <div className='book'>
            <img src={img} alt="" />
            <p>name:{name}</p>
            <p>price:{price}</p>
            <button onClick={()=>addToCart(book)}>
                <p className='btn-txt'>add to cart <FontAwesomeIcon icon={faShoppingCart} /></p>
            </button>
        </div>
    );
};

export default Books;