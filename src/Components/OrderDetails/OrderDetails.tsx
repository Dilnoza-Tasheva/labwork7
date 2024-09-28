import './OrderDetails.css';
import * as React from "react";

interface Item {
    name: string;
    price: number;
}

interface OrderDetailsProps {
    order: Item[];
}

const OrderDetails: React.FC<OrderDetailsProps> =({order}) => {
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
                                {item.name} {item.price} kgs
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OrderDetails