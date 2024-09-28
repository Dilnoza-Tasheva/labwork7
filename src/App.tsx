import './App.css'
import ItemList from "./Components/ItemList/ItemList.tsx";
import OrderDetails from "./Components/OrderDetails/OrderDetails.tsx";
import {useState} from "react";

interface Item {
    name: string;
    price: number;
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
        setOrder([...order, item]);
    };

  return (
      <div className="container">
          <OrderDetails order={order}/>
          <div>
              <h3>Add items:</h3>
              <ItemList items={Items} addToOrder={addToOrder}/>
          </div>
      </div>
  )
};

export default App
