import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];

const isOpen = () => {
  const now = new Date();
  const curhour = now.getHours();
  return curhour >= 10 && curhour <= 22;
};

const Header = ({ isOpen }) => {
  return (
    <div className='header'>
      <h1>Julian's Pizza Co.</h1>
      <h2 className='Menu'> Our Menu</h2>
      <p>{isOpen() ? "Authentic Italian cuisine" : ""}, all from our stone oven</p>
    </div>
  );
};

const Menu = ({ pizzaData }) => {
  return (
    <div className='container'>
      <div className='pizzas'>
        {pizzaData.map((pizza, index) => (
          <div key={index} className='pizza'>
            <img src={pizza.photoName} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p className='desc'>{pizza.ingredients}</p>
            <p>{Condition(pizza)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Condition = (pizza) => {
  return (pizza.soldOut === false ? `$${pizza.price}` : "Sold Out");
};

const Time = ({ isOpen }) => {
  return (
    <footer className='footer'>
      {isOpen() ? "We're currently open" : "Sorry we're closed"}
      {isOpen() ? <button className='btn'>Order</button> : ""}
    </footer>
  );
};

function App() {
  return (
    <div className="PizzaApp">
      <Header isOpen={isOpen} />
      <Menu pizzaData={pizzaData} />
      <br />
      <Time isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
