import * as React from "react";
import './ItemButton.css';

interface PropsBtn {
    name: string,
    price: number
}


const ItemButton: React.FC<PropsBtn> = ({name, price}) => {
    return (
        <button type="button" className="item_btn">
            {name}: {price} Kgs
        </button>
    );
};

export default ItemButton