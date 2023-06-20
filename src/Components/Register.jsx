import React, { useContext, useRef, useState } from "react";

import "./Login_Register.css";
import { Context } from "./Context/Context_api";
import { Link, useNavigate } from "react-router-dom";

import NavbarPage from "./NavbarPage";
import Footer from "./Footer";

const Register = () => {
    const Navigate = useNavigate();

    const inputRef = useRef(null);

    const { signup, setSignup } = useContext(Context);

    const handleSubmit = () => {
        const userName = inputRef.current.user.value;
        const userEmail = inputRef.current.email.value;
        const userPassword = inputRef.current.password.value;

        setSignup([...signup, { userName, userEmail, userPassword }]);
        Navigate("/login");
    };

    return (
        <>
        <div className="main_conatiner">

            <NavbarPage />
            <div className="container">
                <form
                    ref={inputRef}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <label htmlFor="email">Full Name</label>
                    <input type="text" placeholder="Name" id="name" name="user" />
                    <label htmlFor="email">E mail</label>
                    <input type="email" placeholder="Email" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" id="password" name="password" />
                    <input type="checkbox" /> Remember Me
                    <button onClick={handleSubmit} className="click" type="submit">
                        Register
                    </button>
                </form>
                <label>Already have an account ?</label>
                <Link to="/login"> Login here..</Link>
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Register;
