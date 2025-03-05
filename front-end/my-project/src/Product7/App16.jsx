import React from 'react'
import Solar7 from './Solar7'
import Head from '../assets/Head'
import Menubar from '../assets/Menubar'
import Last from '../assets/Last'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function App16() {
    const [cart, setCart] = React.useState([]); // Example cart state
  
  return (
    <>
        <Head/>
        <Menubar/>
        <Solar7/>
        <Last/>

        {/* Add the Link component here */}
              <Link
                to="/cart"
                state={{ cart }}
                className="fixed px-4 py-2 text-white bg-blue-500 rounded bottom-4 right-4 hover:bg-blue-600"
              >
                View Cart ({cart.length})
              </Link>
    </>
  )
}

export default App16