import './OrderDetails.css';
import * as React from "react";
import DeleteItemButton from "../DeleteItemButton/DeleteItemButton.tsx";

interface Item {
    name: string;
    price: number;
    quantity?: number;
}

interface OrderDetailsProps {
    order: Item[];
    removeFromOrder: (name: string) => void;
    countTotalSum: (items: Item[]) => number;
}

const OrderDetails: React.FC<OrderDetailsProps> =({order, removeFromOrder, countTotalSum}) => {
    return (
        <div>
            <h3>Order details:</h3>
            <div className="order_details">
                {order.length === 0 ? (
                    <p>Order is empty!</p>
                ) : (
                    <ul className="order_list">
                        {order.map((item, index) => (
                            <li key={index}>
                                {item.name} {item.price} kgs x {item.quantity}
                                <DeleteItemButton
                                    onClick={() => removeFromOrder(item.name) }
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <h4>Total sum: {countTotalSum(order)} kgs</h4>
        </div>
    );
};

export default OrderDetails