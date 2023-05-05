import React from "react";
import "./productCard.css";

const ProductCard = (props) => {
    const { image, category, name, price, total } = props;
    return (
        <>
            <div className="productCard">
                <div className="productCard__image">
                    <img src={image} alt={name} />
                </div>
                <div className="productCard__info">
                    <h4>{category}</h4>
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <p>{total}</p>
                </div>
            </div>
        </>
    )
}
export default ProductCard;
