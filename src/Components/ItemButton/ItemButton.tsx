import * as React from "react";
import './ItemButton.css';

interface PropsBtn {
    name: string;
    price: number;
    onClick: () => void;
}


const ItemButton: React.FC<PropsBtn> = ({name, price, onClick}) => {
    return (
        <button type="button" className="item_btn" onClick={onClick}>
            {name} price: {price} Kgs
        </button>
    );
};

export default ItemButton