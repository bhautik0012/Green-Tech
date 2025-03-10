import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/Navbar'
// import Navbar from '../assets/Navbar';

const Update = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate()

  var { id } = useParams();
  // console.log("id------>",id)

  useEffect(() => {

    axios.get('https://solar-api-d41x.onrender.com/u_data/' + id)
      .then(function (response) {
        // handle success
        console.log(response.data);

        setName(response.data.data.name)
        setEmail(response.data.data.email)
        setPassword(response.data.data.password)
        setMobile(response.data.data.mobile)
        setAge(response.data.data.age)
        setCity(response.data.data.city)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () { 
        // always executed
      });
    // Update(id)
  }, [id])

  const Update = async (id) => {

    const data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      age: age,
      city: city
    }

    await axios.post('https://solar-api-d41x.onrender.com/update/' + id, data)
      .then((response) => {
        console.log(response.data)
        navigate('/')

      })

    setName("")
    setEmail("")
    setPassword("")
    setMobile("")
    setAge("")
    setCity("")


  }

  return (
    <>

      <div style={{
        backgroundImage: `url('https://www.zunroof.com/blog/wp-content/uploads/2018/07/space-based-solar-system.jpg')`,
        height: `100vh`,
        objectFit: `cover`
      }}>

      <div className='box w-100'>
        <div className='m-auto text-center border-purple-500 boder'>
          <h4 className='text-white fs-2'>Update user</h4>
          <label className='text-white me-5 fs-5'>Name :- </label>
          <input type='name' className='mt-2 rounded fs-5 w-25' value={name} placeholder='name'
            onChange={(e) => {
              setName(e.target.value
              )
            }}></input>

          <br></br>
          <label className='text-white me-5 fs-5'> Email :- </label>
          <input type='email' className='mt-2 rounded fs-5 w-25' value={email} placeholder='email'
            onChange={(e) => {
              setEmail(e.target.value
              )
            }}
          ></input>

          <br></br>
          <label className='text-white me-1 fs-5'>Password :- </label>
          <input type='password' className='mt-2 rounded fs-5 w-25' value={password} placeholder='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></input> <br></br>
          <label className='text-white me-4 fs-5'>Mobile :-</label>
              <input type='number' className='mt-2 rounded fs-5 w-25' value={mobile} placeholder='mobile'
            onChange={(e) => {
              setMobile(e.target.value
              )
            }}
          ></input><br></br>
          <label className='text-white me-5 fs-5'>Age :- </label>
              <input type='number' className='mt-2 rounded fs-5 w-25' value={age} placeholder='age'
            onChange={(e) => {
              setAge(e.target.value
              )
            }}
          ></input><br></br>
          <label className='text-white me-5 fs-5'>City :- </label>
              <input type='text' className='mt-2 rounded fs-5 w-25' value={city} placeholder='city'
            onChange={(e) => {
              setCity(e.target.value
              )
            }}
          ></input><br></br>
          <input type='submit' onClick={() => Update(id)} value="update" className='p-2 mt-3 text-white rounded bg-success' ></input>
        </div>
        </div>
        
      </div>

    </>
  )
}

export default Update
