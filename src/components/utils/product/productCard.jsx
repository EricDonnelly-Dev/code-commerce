import React from "react";
import styles from "./productCard.module.css";

const ProductCard = (props) => {
    const { image, category, name, price, total } = props;
    return (
        <>
            <div className={styles.productCard}>
                <div className={styles.productImg}>
                    <img src={image} alt={name} />
                </div>
                <div className={styles.productCardInfo}>
                    <div className={styles.infoLeft}>
                        <p className={styles.productCategory}>{category}</p>
                        <h3 className={styles.productName}>{name}</h3>
                    
                    </div>
                    <div className={styles.infoRight}> 
                        <p className={styles.price}>{price}</p>
                        <select className={styles.quantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <p className={styles.total}>{total}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard;
