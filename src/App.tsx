import './App.css'
import ItemList from "./Components/ItemList/ItemList.tsx";
import OrderDetails from "./Components/OrderDetails/OrderDetails.tsx";
import {useState} from "react";

interface Item {
    name: string;
    price: number;
    quantity: number;
}

const App = () => {
    const Items = [
        {name: 'Burger', price: 90},
        {name: 'Hot-Dog', price: 60},
        {name: 'Quesadilla', price: 80},
        {name: 'Fries', price: 30},
        {name: 'Coffee', price: 25},
        {name: 'Tea', price: 20},
        {name: 'Juice', price: 18},
        {name: 'Coke', price: 25},
    ]

    const [order, setOrder] = useState<Item[]>([]);

    const addToOrder = (item: Item) => {
        setOrder(prevItems => {
            const existingItem = prevItems.find(i => i.name === item.name);

            if (existingItem) {
                return prevItems.map(i=>
                i.name === item.name ? {...i, quantity: i.quantity + 1}: i
                );
            } else {
                return [...prevItems, {...item, quantity: 1}];
            }
        });
    };

    const removeFromOrder = (name: string) => {
        setOrder(prevItems =>
        prevItems.filter(item => item.name !== name)
        );
    };

    const countTotalSum = (items: Items[]) => {
        return items.reduce((acc, item) => {
                return acc + (item.quantity * item.price);
        }, 0)
    };

  return (
      <div className="container">
          <OrderDetails order={order} removeFromOrder={removeFromOrder} countTotalSum={countTotalSum}/>
          <div>
              <h3>Add items:</h3>
              <ItemList items={Items} addToOrder={addToOrder}/>
          </div>
      </div>
  )
};

export default App
