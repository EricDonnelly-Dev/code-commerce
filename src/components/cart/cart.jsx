import  { Component } from 'react';
import styles from './cart.module.css';

import ProductCard from '../utils/product/productCard';
import img from '../../assets/react.svg'
class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Cart</h1>

                <ProductCard category={'category'} image={img} name={'name'} price={'$50'} total={'$100'} />
                <ProductCard category={'category'} image={img} name={'name'} price={'$50'} total={'$100'} />
            </div>
         );
    }
}
export default Cart;