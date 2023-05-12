/* eslint-disable react/prop-types */
import React from 'react';
import styles from './cart.module.css';

import ProductCard from '../utils/product/productCard';

function Cart(props) {
    const {handleChange,cartItems,handleRemove} = props;
  
    
    return ( 
        <table className={styles.cartTable}>
            <thead>
            <tr> 
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
                </thead>
                <tbody>
            {cartItems.map((data, index) => {
                return <ProductCard key={index} handleRemove={handleRemove} handleChange={handleChange} {...data} />
            })
            }
            </tbody>
        </table>
        );
    }
export default Cart;