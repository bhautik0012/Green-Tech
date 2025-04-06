import React from 'react'
import Head1 from '../showdata/Head1'
import Navbar from '../showdata/Navbar'
import AddProducts from './AddProducts'

function Darshboard() {
  return (
    <>
        <Head1/>
        <hr className='p-0 m-0 border-black'/>
        <AddProducts/>
        
    </>
  )
}

export default Darshboard