import React from "react";
import styles from "./productCard.module.css";

const ProductCard = (props) => {
    const { image, category, name, price, total } = props;
    return (
        <tr className={styles.productCard}>
            <td className={styles.productRemove}>
                <button className={styles.removeButton}>X</button>
            </td>
            <td className={styles.productInfo}>
                <div className={styles.productImg}>
                    <img src={image} alt={name} />
                </div>
                <div className={styles.productDetails}>
                    <h3 className={styles.productName}>{name}</h3>
                    <p className={styles.productCategory}>{category}</p>
                </div>
            </td>
            <td className={styles.productPrice}>
                <p className={styles.price}>{price}</p>
            </td>
            <td className={styles.productQuantity}>
                <select className={styles.quantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </td>
            <td className={styles.productTotal}>
                <p className={styles.total}>{total}</p>
            </td>
        </tr>
    )
}
export default ProductCard;
