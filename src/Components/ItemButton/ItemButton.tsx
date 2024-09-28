import * as React from "react";
import './ItemButton.css';

interface PropsBtn {
    name: string;
    price: number;
    image: string;
    onClick: () => void;
}

const ItemButton: React.FC<PropsBtn> = ({name, price, image, onClick}) => {
    return (
        <button type="button" className="item_btn" onClick={onClick}>
            <img src={image} alt={name} className="item_image"/>
            <strong>{name}</strong>
            <span className="item_span">{price} kgs</span>
        </button>
    );
};

export default ItemButton