import  { Component } from 'react';
import styles from './cart.module.css';

import ProductCard from '../utils/product/productCard';
import img from '../../assets/react.svg'
class Cart extends Component {
    state = {  }
    render() { 
        const dataArr = [
            {id:1, name:'First',category:'react', price:'$50', total:'$100', image:img},
            {id:2, name:'Second',category:'react', price:'$50', total:'$100', image:img},
            {id:3, name:'Third',category:'react', price:'$50', total:'$100', image:img},
        ]
        
        return ( 
            <table className={styles.cartTable}>
                <tr> 
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                    
                {dataArr.map((data, index) => {
                    return <ProductCard key={index} {...data} />
                })
                }
            </table>
         );
    }
}
export default Cart;