import './App.css'
import ItemList from "./Components/ItemList/ItemList.tsx";
import OrderDetails from "./Components/OrderDetails/OrderDetails.tsx";
import {useState} from "react";
import burgerImage from './assets/burger.svg';
import hotDogImage from './assets/hot-dog.svg';
import tacoImage from './assets/taco.svg';
import friesImage from './assets/fries.svg';
import coffeeImage from './assets/coffee.svg';
import teaImage from './assets/tea.svg';
import juiceImage from './assets/juice.svg';
import cokeImage from './assets/coke.svg';

interface Item {
    name: string;
    price: number;
    quantity: number;
}

const App = () => {
    const Items = [
        {name: 'Burger', price: 90, image: burgerImage},
        {name: 'Hot Dog', price: 60, image: hotDogImage},
        {name: 'Taco', price: 80, image: tacoImage},
        {name: 'Fries', price: 30, image: friesImage},
        {name: 'Coffee', price: 25, image: coffeeImage},
        {name: 'Tea', price: 20, image: teaImage},
        {name: 'Juice', price: 18, image: juiceImage},
        {name: 'Coke', price: 25, image: cokeImage},
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
