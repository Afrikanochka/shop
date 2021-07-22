import React from 'react';

const CartListItem = ({id, name, price, removeFromCart}) => {
    const remove = () => {
        removeFromCart(id);
    }
    
    return (
        <li>
            <h3>{name}</h3>
            <p>{price}</p>
            <button type="button" onClick={remove} >X</button>
          </li>)}

export default CartListItem;