import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Head from '../assets/Head';
import Menubar from '../assets/Menubar';
import Portfolio from './Portfolio';
import Last from '../assets/Last';

function App2() {
  const [cart, setCart] = React.useState([]); // Example cart state

  return (
    <>
      <Head />
      <Menubar />
      <Portfolio />
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

export default App2;