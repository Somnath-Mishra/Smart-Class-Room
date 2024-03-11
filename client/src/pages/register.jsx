import React, { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";

import './Style/register.scss'
import axios from "axios";

const Register = () => {
  const data = { firstName: "", lastName: "", email: "", password: "", accountType: "" }
  const [err, setErr] = useState(false);
  const [inputdata, setInputdata] = useState(data);
  //const navigate = useNavigate();



  const handleSumbit = async (e) => {

    e.preventDefault();


    try {

      const firstName = e.target[0].value;
      const lastName = e.target[1].value;
      const email = e.target[2].value;
      const password = e.target[3].value;
      const accountType = e.target[4].value;
      //const file=e.target[3].files[0];

      setInputdata({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        accountType: accountType
      })
      console.log(inputdata);

      try {
        await axios.post("http://localhost:8000/SmartLab/users/register", inputdata).
          then((res) => {
            console.log(res)
          })
      }
      catch (err) {
        console.log(err.response)
      }


      console.log(email);



    }
    catch (err) {
      console.log(err);
      setErr(true)
    }
  }






  return (
    <>
      <div className="formcontainer">



        <div className="formwrapper">

          <span className="logo">Smart ClassRoom


          </span>
          <span className="title">Register</span>

          <form onSubmit={handleSumbit}>
            <input type="text" className="text" placeholder="First Name" />
            <input type="text" className="text" placeholder="Last Name" />
            <input type="email" className="text" placeholder="email" />
            <input type="password" className="text" placeholder="password" />
            <input type="text" className="text" placeholder="AccountType" />

            <button>Sign up</button>

            {err && <span>Something went Wrong</span>}

          </form>
          <p>You do have an account ? </p>
        </div>



      </div>
    </>           

  )

}

export default Register;