// Cart.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  return (
    <div className="relative">
      <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl" />
    </div>
  );
};

export default Cart;
