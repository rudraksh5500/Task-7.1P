import React, { useState } from "react";
import Input from "./Input"; 
import Button from "./Button";
import { Link } from "react-router-dom";
import "./App.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { SignInWithGooglePopup, createUserDocFromAuth } from "./firebase";

const Login = (props) => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
};

  const [contact, setContact] = useState({
    username: "",
    password: "",
  });
 const handleclick=()=>{

  const auth = getAuth();
 signInWithEmailAndPassword(auth, contact.username, contact.password)
 }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <div className="header-div">
      <Input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleChange}
        value={contact.username}
      />

      <br></br>

      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={contact.password}
      />

      <br></br>

      <Button type="submit" onClick={handleclick} text="Login" />

      

      <Link to="/signup">Sign up instead</Link>
    </div>
  );
};

export default Login;
