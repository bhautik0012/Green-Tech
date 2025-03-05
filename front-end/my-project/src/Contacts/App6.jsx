import React from 'react'
import Head from '../assets/Head'
import Menubar from '../assets/Menubar'
import Us from './Us'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Last from '../assets/Last'

function App6() {
    const [cart, setCart] = React.useState([]); // Example cart state
  
  return (
    <>
        <Head/>
        <Menubar/>
        <Us/>
        <Last/>

         {/* Add the Link component here  */}
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

export default App6