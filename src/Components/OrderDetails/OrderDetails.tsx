import './OrderDetails.css';
import * as React from "react";
import DeleteItemButton from "../DeleteItemButton/DeleteItemButton.tsx";

interface Item {
    name: string;
    price: number;
    quantity: number;
}

interface OrderDetailsProps {
    order: Item[];
    removeFromOrder: (name: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> =({order, removeFromOrder}) => {
    return (
        <div>
            <h3>Order details:</h3>
            <div className="order_details">
                {order.length === 0 ? (
                    <p>Order is empty!</p>
                ) : (
                    <ul>
                        {order.map((item, index) => (
                            <li key={index}>
                                {item.name} {item.price} kgs x {item.quantity}
                                <DeleteItemButton
                                    name={item.name}
                                    price={item.price}
                                    onClick={() => removeFromOrder(item.name) }
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OrderDetails