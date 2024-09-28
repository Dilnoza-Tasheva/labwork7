import ItemButton from "../ItemButton/ItemButton.tsx";
import * as React from "react";
import './ItemList.css';

interface Item {
    name: string;
    price: number;
}

interface ItemProps {
    items: Item[];
    addToOrder: (item: Item) => void;
}

const ItemList: React.FC<ItemProps> = ({items, addToOrder}) => {
    return (
        <div className="add_items">
            {items.map((item, index) => (
                <div className="items" key={index}>
                    <ItemButton
                        name={item.name}
                        price={item.price}
                        onClick={() => addToOrder(item)}
                    />
                </div>
            ))}
        </div>
    )
};

export default ItemList