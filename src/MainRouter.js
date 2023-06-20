import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Dress from "./Components/Dress";
import Footwear from "./Components/Footwear";
import Toys from "./Components/Toys";

import Cart from "./Components/Cart";

import { Context } from "./Components/Context/Context_api";
import { productdatas } from "./data";
import ViewDetails from "./Components/ViewDetails";
import Login from "./Components/Login";
import Register from "./Components/Register";

// Admin--------------------------------------------------

import Admin from "./Components/Admin/Admin";
import AdminUsers from "./Components/Admin/AdminUsers";
import Products from "./Components/Admin/Products";
import SingleUser from "./Components/Admin/SingleUser";
import Add_Product from "./Components/Admin/Add_Product";
import User_Search from "./Components/User_Search";

import AdminEdit from "./Components/Admin/AdminEdit";
import BuyProducts from "./Components/BuyProducts";

const MainRouter = () => {
    const [products, setProducts] = useState(productdatas);

    const [cart, setCart] = useState([]);

    const [signup, setSignup] = useState([]);

    const [auth, setAuth] = useState(false);

    const [navSearch, setNavSearch] = useState([]);

    const [poductSearch, setProductSearch] = useState([]);

    const [childrens, setChildrens] = useState(<AdminUsers />);

    const data = {
        products,
        setProducts,

        cart,
        setCart,

        signup,
        setSignup,

        auth,
        setAuth,

        navSearch,
        setNavSearch,

        poductSearch,
        setProductSearch,

        childrens,
        setChildrens,
    };

    return (
        <div>
            <Context.Provider value={data}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dress" element={<Dress />} />
                    <Route path="/footwear" element={<Footwear />} />
                    <Route path="/toys" element={<Toys />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/view/:id" element={<ViewDetails />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/admin" element={<Admin />}>

                    </Route>

                    <Route path="/adminusers" element={<AdminUsers />} />
                    <Route path="products" element={<Products />} />
                    <Route path="/ad_products" element={<Add_Product />} />
                    <Route path="/singleuser/:idpara" element={<SingleUser />} />

                    <Route path="/user_search" element={<User_Search />} />
                    <Route path="/adminedit/:idedit" element={<AdminEdit />} />
                    <Route path="/buyproducts" element={<BuyProducts/>}/>
                </Routes>
            </Context.Provider>
        </div>
    );
};

export default MainRouter;
