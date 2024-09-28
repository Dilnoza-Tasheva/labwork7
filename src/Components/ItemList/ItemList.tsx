import ItemButton from "../ItemButton/ItemButton.tsx";
import * as React from "react";
import './ItemList.css';

interface Items {
    name: string;
    price: number;
}

interface ItemProps {
    items: Items[]
}

const ItemList: React.FC<ItemProps> = ({items}) => {
    return (
        <div className="add_items">
            {items.map((item, index) => (
                <div className="items" key={index}>
                    <ItemButton name={item.name} price={item.price}/>
                </div>
            ))}
        </div>
    )
};

export default ItemList