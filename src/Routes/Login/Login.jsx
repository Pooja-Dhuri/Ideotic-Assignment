import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import style from "./Login.module.css";

const Login = () => {
  const [email1, setEmail] = useState();
  const [pass1, setPass] = useState();
  const { login} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    let getemail = JSON.parse(localStorage.getItem("useremail"));

    for (let i = 0; i < getemail.length; i++) {
      if (getemail[i].Email === email1 && getemail[i].password === pass1) {
        flag = true;
      }
    }
    if (flag === true) {
      alert("login success");
      window.localStorage.setItem("loginStatus",true)
      login();
    } else {
      alert("login failed");
    }
  };
  return (
    <div className={style.login_main_div}>
      <div className={style.login_div}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={style.input_div}>
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
    </div>
  );
};

export default Login;
