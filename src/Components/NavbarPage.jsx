import React, { useContext } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useNavigate } from "react-router-dom";
// -----------------------------------------

import Home from "./Home";
import Dress from "./Dress";
import Footwear from "./Footwear";
import Toys from "./Toys";
// FOOTER STYLED------------------------
import { Context } from "./Context/Context_api";
const NavbarPage = () => {
    const Navigate = useNavigate();
    const { auth, setNavSearch } = useContext(Context);

    const myCart = () => {
        if (auth === true) {
            Navigate("/cart");
        } else {
            alert("Please Login");
            Navigate("/login");
        }
    };

    const userSearchHandler = (e) => {
        setNavSearch(e.target.value.toLowerCase());

        Navigate("/user_search");
    };

    return (
        <div>
            <Navbar expand="lg" style={{ height: "6rem ", backgroundColor: "rgb(228, 226, 226)", zindex: "1000" }}>
                <Container fluid style={{ padding: "0" }}>
                    <div className="logo" style={{fontFamily: 'Josefin Sans' }}>Baby-Ku</div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" style={{ backgroundColor: "rgb(228, 226, 226)" }}>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px", backgroundColor: "rgb(228, 226, 226)" }}
                            navbarScroll
                        >
                            <Link style={{ textDecoration: "none" }} to="/" element={<Home />}>
                                {" "}
                                <Nav.Link style={{ fontSize: "20px" }} href="#action1">
                                    Home
                                </Nav.Link>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/dress" element={<Dress />}>
                                {" "}
                                <Nav.Link style={{ fontSize: "20px" }} href="#action2">
                                    Dress
                                </Nav.Link>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/footwear" element={<Footwear />}>
                                {" "}
                                <Nav.Link style={{ fontSize: "20px" }} href="#action3">
                                    Footwear
                                </Nav.Link>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/toys" element={<Toys />}>
                                {" "}
                                <Nav.Link style={{ fontSize: "20px" }} href="#action4">
                                    Toys
                                </Nav.Link>
                            </Link>
                        </Nav>
                        <Nav.Link
                            as={Link}
                            to="/admin"
                            style={{ fontSize: "20px", textDecoration: "none", marginRight: "2rem" }}
                            href="#action2"
                        >
                            <GrUserAdmin />
                        </Nav.Link>
                        <Form className="d-flex" style={{alignItems:"center"}}>
                            <Form.Control
                                style={{ width: "15rem"}}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={userSearchHandler}
                            />
                            <Button style={{height:'2rem',display:'flex'}} variant="outline-success">
                                <FiSearch />
                            </Button>
                        </Form>

                        <Nav>
                            <div className="nav-side">
                                <Nav.Link
                                    onClick={myCart}
                                    style={{ fontSize: "20px", textDecoration: "none" }}
                                    href="#action1"
                                >
                                    <FiShoppingCart />
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    style={{ fontSize: "20px", textDecoration: "none" }}
                                    href="#action2"
                                >
                                    <FaUserAlt />
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarPage;
