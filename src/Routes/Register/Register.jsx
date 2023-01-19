import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../Login/Login.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(email,pass)
    let arr = JSON.parse(localStorage.getItem('useremail')) || []
    let emailobj={
      Email:email,
      password:pass
    }
    arr.push(emailobj)
    
    localStorage.setItem("useremail", JSON.stringify(arr));
    // localStorage.setItem("userpass", JSON.stringify(pass));
    navigate("/login");
  };
  return (
    <div className={style.login_div}>
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div className={style.input_div}>
          <input type="text" placeholder="Enter Name" />
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className={style.submit_button}>
          <input type="submit" />
        </div>
        <h2>
          If Already User?<Link to="/login">Login</Link>
        </h2>
      </form>
    </div>
  );
};

export default Register;
