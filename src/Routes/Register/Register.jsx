import React, { useState } from "react";
import style from '../Login/Login.module.css'

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState();

  const handleRegister = (e) => {};
  return (
    <div className={style.login_div}>
      <form>
        <h1>Register</h1>
        <div className={style.input_div}>
          <input type="text" onChange={handleRegister} placeholder="Enter Name"/>
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
      </form>
    </div>
  );
};

export default Register;
