import React, { useContext, useRef, useState } from "react";

import "./Login_Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./Context/Context_api";
import NavbarPage from "./NavbarPage";
import Footer from "./Footer";

const Login = () => {
    const Navigate = useNavigate();
    const inputRef = useRef(null);
    const { signup, setAuth } = useContext(Context);

    const handleSubmit = () => {
        const Email = inputRef.current.email.value;
        const Password = inputRef.current.password.value;
        
        const userDetails = signup.filter((item) => item.userEmail === Email && item.userPassword === Password);

        setAuth(true);

        if (userDetails.length > 0) {
            alert("Login Successfully");
            Navigate("/");
        } else {
            alert("try again");
        }
    };

    return (
        <>
        
        <NavbarPage/>
        <div className="container">
            <form
                ref={inputRef}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <label htmlFor="email">E mail</label>
                <input type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" id="password" name="password" />
                <input type="checkbox" /> Remember Me
                <button onClick={handleSubmit} className="click" type="submit">
                    Login
                </button>
            </form>

            <label className="click2"> Don't have have an account?</label>
            <Link to="/register"> Register here..</Link>
        </div>
        <Footer/>
        </>
    );
};

export default Login;
