import React from "react";

import styled from "styled-components";

const Container1 = styled.div`
    height: 50vh;
    background-color: #ece8e8;
    padding: 5rem;
    display: flex;

    justify-content: space-between;
    /* align-items: center; */
`;

const Cont_1 = styled.div`
    height: 100%;
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    /* background-color: #000000; */
    text-align: left;
`;

const Linklist = styled.li`
    list-style: none;
    color: grey;
    /* background-color: lightcoral; */
`;

const Linkhead = styled.h5`
    color: darkblue;
    font-style: italic;
    padding-bottom: 1rem;
`;

const Cont_2 = styled.div`
    height: 10vh;
    border-top: 1px solid lightgrey;
    background-color: #ece8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: grey;
`;

const Footer = () => {
    return (
        <div>
            <Container1>
                <Cont_1>
                    <Linklist style={{ fontSize: "30px", margin: "0.2rem 0 1.4em " }}>Baby-Ku</Linklist>
                    <Linklist>123 Fifth Ave, New York, NY 12004</Linklist>
                    <Linklist>+1 123 456 78 90</Linklist>
                    <Linklist>mail@example.com </Linklist>
                </Cont_1>
                <Cont_1>
                    <Linkhead>Customer Service</Linkhead>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Contact Us
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Help & FAQs
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Payment Method
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Delivery Information
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Track Your Order
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Return & Exchanges
                        </a>
                    </Linklist>
                </Cont_1>
                <Cont_1>
                    <Linkhead>Categories</Linkhead>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Clothing & Fashion
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Help & FAQs
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Toys
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            School Supplies
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Birthday Party Supplies
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Baby Diapering
                        </a>
                    </Linklist>
                </Cont_1>

                <Cont_1>
                    <Linkhead>Categories</Linkhead>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Categories
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Privacy & Cookies Policy
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Privacy & Cookies Policy
                        </a>
                    </Linklist>
                    <Linklist>
                        <a href="" style={{ textDecoration: "none", color: "grey" }}>
                            Promo & Terms
                        </a>
                    </Linklist>
                </Cont_1>
            </Container1>
            <Cont_2>Copyright © 2023 Baby Store | Powered by Baby Store</Cont_2>
        </div>
    );
};

export default Footer;
