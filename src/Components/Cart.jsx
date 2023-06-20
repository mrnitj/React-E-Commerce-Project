// ----------------------------------------------

import React from "react";

import { useContext } from "react";

import { Context } from "./Context/Context_api";

import "./Cart.css";

import styled from "styled-components";
import Button from "react-bootstrap/Button";
import NavbarPage from "./NavbarPage";
import Footer from "./Footer";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const MainContainer = styled.div`
    height: 100vh;
    /* background-color: aqua; */
    padding: 5rem 7rem 5rem;
`;

const Cont_1 = styled.div`
    height: 100%;
    /* background-color: aqua; */
    overflow: auto;
    padding: 2rem;
`;

const Cont_2 = styled.div`
    height: 100%;
    /* background-color: lightblue; */
    /* border-bottom: 1px solid black; */

    height: 30%;
    padding: 0.5rem;
`;

const Product = styled.div`
    height: 100%;
    border: 1px solid black;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;
    padding: 0 1rem 0;
`;

const Cart = () => {
    const { cart, setCart } = useContext(Context);

    const Remove = (e) => {
        const removeId = parseInt(e.target.id);
        const balanceId = cart.filter((item) => item.id !== removeId);
        setCart(balanceId);
    };

    const addQty = (id) => {
        const newqty = cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item));
        setCart(newqty);
    };

    const removeQty = (id) => {
        const newqty = cart.map((item) => (item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));
        setCart(newqty);
    };

    let total =0;

    return (
        <>
            <NavbarPage />
            <MainContainer>
                <Cont_1>
                    <Cont_2>
                        {cart.map((item) => (
                            
                            <Product key={item.id}>
                                <div
                                    style={{
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "85%",
                                    }}
                                >
                                    <div className="productImg" style={{ height: "100%", flex: "1" }}>
                                        <img src={item.img} alt="" style={{ objectFit: "contain", height: "100%" }} />
                                    </div>
                                    <div className="productTitle" style={{ flex: "1" }}>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="productQty" style={{ height: "100%", flex: "1" }}>
                                        <button className="pdtbtn">
                                            <AiOutlineMinus onClick={() => removeQty(item.id)} />
                                        </button>

                                        <input type="text" placeholder={item.qty} />

                                        <button className="pdtbtn">
                                            <AiOutlinePlus onClick={() => addQty(item.id)} />
                                        </button>
                                    </div>
                                    <div className="productPrice" style={{ flex: "1" }}>
                                        <p>₹ {item.qty * item.price}</p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button onClick={Remove} id={item.id} variant="outline-danger" className="ms-3">
                                        Remove
                                    </Button>
                                </div>
                                <p style={{display:'none'}}>{total=total+item.qty*item.price}</p>
                            </Product>

                        ))}
                    </Cont_2>
                </Cont_1>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "0 3rem 0 " }}>
                    <p style={{ marginRight: "2rem" }}> Total: ₹ {total} </p>
                    
                    <Button onClick={() => {alert('You have purchased the items')
                setCart([])
                }}>Buy Product</Button>
                </div>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Cart;
