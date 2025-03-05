import React from "react";
import Head from "../assets/Head";
import Menubar from "../assets/Menubar";
import Last from "../assets/Last";
import Solar1 from "./Solar1";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function App10() {
    const [cart, setCart] = React.useState([]); // Example cart state
  

  return (
    <>
      <Head />
      <Menubar />
      <Solar1 />
      <Last />

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

export default App10;
