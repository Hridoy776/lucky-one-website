import React from 'react';
import './Books.css'
const Books = (props) => {
    const{name,img,price}=props.book;
    return (
        <div className='book'>
            <img src={img} alt="" />
            <p>name:{name}</p>
            <p>price:{price}</p>
            <button>
                <p className='btn-txt'>add to cart</p>
            </button>
        </div>
    );
};

export default Books;