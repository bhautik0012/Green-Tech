import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from './assets/Head';
import Menubar from './assets/Menubar';
import Solar from './assets/Solar';
import Calculater from './assets/Calculater';
import Quote from './assets/Quote';
import Choice from './assets/Choice';
import Developer from './assets/Developer';
import CarouselComponent from './assets/CarouselComponent';
import Last from './assets/Last';

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]); // Example cart state

  return (
    <>
      <Head />
      <Menubar />
      <Solar />
      <Calculater />
      <Quote />
      <Choice />
      <Developer />
      <CarouselComponent />
      <Last />

      {/* Add the Link component here */}
      <Link
        to="/cart"
        state={{ cart }}
        className="fixed px-4 py-2 text-white bg-blue-500 rounded bottom-4 right-4 hover:bg-blue-600"
      >
        View Cart ({cart.length})
      </Link>
    </>
  );
}

export default App;