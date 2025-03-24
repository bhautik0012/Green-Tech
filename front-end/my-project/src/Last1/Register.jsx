import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const AddUser = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      age: age,
      city: city
    };
    var pa = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var em = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var mo = /^\d{10}$/;
    var ag = /^(1[01]?[0-9]|[1-9]?[0-9])$/;
        if (name == "") {
      alert('enter name')
    }
    else if (data.email.match(em)) {
      if (data.password.match(pa)) {
        if (data.mobile.match(mo)) {
          if (data.age.match(ag) ) {
            if (data.city == '') {
              alert('enter city')
            }
            else {
              axios
                .post("https://solar-api-d41x.onrender.com", data)
                .then(function (response) {
                  // handle success
                  console.log(response);
                  navigate("/Login");
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
                .finally(function () {
                  // always executed
                });

              setName("");
              setEmail("");
              setPassword("");
              setMobile("");
              setAge("");
              setCity("");
            }
          }
          else {
            alert('enter valid age')
          }
        }
        else {
          alert('invalid mobile number')
        }

      }
      else {
        alert("enter valid  password")
      }
    }
    else {
      alert('enter valid email')
    }

  }

  return (
    <>

      <body
        style={{
          backgroundImage: `url('./public/admin1.jpg')`,
          height: `750.5px`,
          objectFit: `cover`,
        }}
      >
        <div className="lg:pt-[60px] md:pt-[20px] sm:pt-[30px]">
        <div className="lg:mt-[0px] p-7 border border-black lg:w-[850px] md:w-[500px]  rounded-2xl backdrop-blur-sm lg:ml-[300px] md:ml-[100px] sm:ml-[10px] md:mt-[0px] sm:mt-[0px] mb-[50px] sm:w-[400px] shadow-2xl shadow-black">

          <div className="lg:flex">

            <div className="pl-6 pt-5 m-5 pr-5  sm:w-[330px] md:w-[380px] md:h-[410px] lg:w-[380px] lg:h-[auto] rounded-2xl border-black">

              <div className="font-bold text-[30px] mb-[40px] lg:ml-[290px] md:ml-[100px] sm:ml-[40px]">
                <h4 className="text-cyan-50">Register</h4>
              </div>

              <input
                type="name"
                className="border-black bg-gray-200 p-1 rounded placeholder:text-[19px] lg:w-[330px] md:w-[330px] sm:w-[260px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
                value={name}
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <br></br>
              <input
                type="text"
                className="border-black p-1 bg-gray-200 rounded placeholder:text-[19px] mt-[30px] lg:w-[330px] md:w-[330px] sm:w-[260px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
                value={email}
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <br></br>
              <input
                type="password"
                className="border-black bg-gray-200 p-1 rounded lg:w-[330px] md:w-[330px] sm:w-[260px] placeholder:text-[19px] mt-[30px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
                value={password}
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>{" "}
              <br></br>

            </div>

            <div className="lg:mt-[125px] md:mt-[-135px] sm:mt-[15px] sm:ml-[45px]">


              <input
                type="number"
                className="border-black p-1 bg-gray-200 rounded placeholder:text-[19px] lg:w-[330px] md:w-[330px] sm:w-[260px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
                value={mobile}
                placeholder="Mobile No"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                required
              ></input>
              <br></br>
              <input
                type="number"
                className="border-black p-1 bg-gray-200 rounded placeholder:text-[19px] mt-[30px] lg:w-[330px] md:w-[330px] sm:w-[260px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
                value={age}
                placeholder="Age"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                required
              ></input>

              <br></br>
              <input
                type="text"
                className="border-black p-1 bg-gray-200 rounded placeholder:text-[19px] mt-[30px] lg:w-[330px] md:w-[330px] sm:w-[260px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
                value={city}
                placeholder="City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
              ></input>
            </div>

          </div>

          <div>
            <input
              type="submit"
              onClick={() => AddUser()}
              className="pt-1 bg-gray-200 pb-1 pl-6 pr-6 lg:ml-[350px] md:ml-[120px] sm:ml-[90px] mt-[45px] border border-black rounded-md lg:mb-[0px] md:mb-[0px] text-black sm:mb-[20px] hover:bg-green-400 duration-500 hover:border-green-400 hover:text-white  font-bold"
              value="Register"

            ></input>
            <br></br>
            <div className="lg:ml-[320px] sm:mb-[20px] lg:mt-[30px] md:mt-[30px] sm:mt-[px] ">
              <Link to={"/login"}>
                <a href="" className="duration-500 hover:text-green-400 hover:text-green text-cyan-50 text-decoration-none">
                  Already have account ?
                </a>
              </Link>
            </div>
          </div>

        </div>
        </div>
      </body>
    </>
  );
};

export default Register;
