import './App.css';
import { ChaiCard } from './assets/components/ChaiCard';
import { Counter } from './assets/components/Counter';
import {ChaiList} from './assets/components/ChaiList.tsx';
import { OrderForm } from './assets/components/OrderForm.tsx';
import {Card} from './assets/components/Card.tsx';
import type {Chai} from './types.ts';

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 25},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 60},
]

function App() {
  return (
    <>
    <div>
      <h1>Hello World</h1>
      <ChaiCard name="Heaphones" price={5000}/>
      <ChaiCard name="IPhone" price={8000}></ChaiCard>
    </div>
    <div>
      <Counter />
    </div>
    <div>
      <ChaiList items={menu} />
    </div>
    <div>
        <OrderForm onSubmit={(order)=>{
          console.log("Placed: ", order.name, order.cups);
        }}/>
    </div>
    <div>
        <Card title="Chai aur Typescript" footer={<button>Order Now</button>} />
    </div>
    </>
  )
}

export default App
