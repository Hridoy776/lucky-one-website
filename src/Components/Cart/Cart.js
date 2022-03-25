import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {img, name} =props.selectedCart;
    
    return (
        <div className='cart'>
            <p>selected books</p>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Cart;