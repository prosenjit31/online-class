import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.addedCourse;
    let total = 0;
    cart.map(price => total = total + price.coursePrice);
    console.log(total)
    return (

        <div className="cart">
            <h1>Online Courses</h1>
            <br />
            <h2>Total Course: {cart.length}</h2>
            <h2>Total Price: ${total}</h2>


        </div>
    );
};

export default Cart;