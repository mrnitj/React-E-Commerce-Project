import React, { useContext } from "react";

import { Context } from "./Context/Context_api";

import styled from "styled-components";
import "./ViewDetails.css";

import { useNavigate, useParams } from "react-router-dom";
import { productdatas } from "../data";
import NavbarPage from "./NavbarPage";
import Footer from "./Footer";
import { Button } from "react-bootstrap";

// import { useNavigate } from 'react-router-dom';

const Main_Container = styled.div`
    height: 80vh;
    /* background-color: #dde7e7; */

    padding: 2rem;
    display: flex;
    align-items: center;

    justify-content: center;
`;

const Cont_1 = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    /* background-color: lightcoral ; */
`;

const Left_Cont = styled.div`
    width: 55%;
    /* background-color: lightblue; */
    padding: 2rem;
`;

const Left_Cont_1 = styled.div`
    /* background-color: beige; */
    height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right_Cont = styled.div`
    width: 45%;
    padding: 4rem 1rem 4rem;
`;

const Right_Cont_1 = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;
    /* background-color: #705454; */
    /* border: 1px solid black; */
    text-align: left;
    letter-spacing: 1px;
    object-fit: contain;
`;

const ViewDetails = () => {
    const Navigate = useNavigate();

    const { cart, setCart, auth } = useContext(Context);
    const { id } = useParams();
    const data = productdatas.filter((item) => item.id == id);

    const myCart = () => {
        if (auth) {
            const [newData] = data;
            const toCart = cart.filter((item) => item.id == id);

            if (toCart.length > 0) {
                return alert("Product already exists");
            } else {
                setCart((prevState) => [...prevState, newData]);
                alert("Product added to Cart");
                Navigate("/cart");
            }
        } else {
            alert("Please Login");
            Navigate("/login");
        }
    };

    return (
        <>
            <NavbarPage />
            <Main_Container>
                {data.map((item) => (
                    <Cont_1 key={item.id}>
                        <Left_Cont>
                            <Left_Cont_1>
                                <img style={{ height: "100%" }} src={item.img} />
                            </Left_Cont_1>
                        </Left_Cont>
                        <Right_Cont>
                            <Right_Cont_1>
                                <h1>{item.title}</h1>
                                <h3>₹ {item.price}</h3>

                                <div>
                                    <button variant="outline-warning" className="btns" onClick={myCart}>
                                        Add To Cart
                                    </button>
                                </div>
                            </Right_Cont_1>
                        </Right_Cont>
                    </Cont_1>
                ))}
            </Main_Container>
            <Footer />
        </>
    );
};

export default ViewDetails;
