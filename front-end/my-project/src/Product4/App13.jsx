import React from 'react'
import Menubar from '../assets/Menubar'
import Head from '../assets/Head'
import Solar4 from './Solar4'
import Last from '../assets/Last'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function App13() {
    const [cart, setCart] = React.useState([]); // Example cart state
  
  return (
    <>
        <Head/>
        <Menubar/>
        <Solar4/>
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

export default App13