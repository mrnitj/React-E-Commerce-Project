import React, { useContext } from "react";
import NavbarPage from "./NavbarPage";
import Footer from "./Footer";

import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";
import { Context } from "./Context/Context_api";

const Container = styled.div`
    display: flex;
`;

const Cont_1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const User_Search = () => {
    const Navigate = useNavigate();
    const { products, navSearch } = useContext(Context);

    const searchedPdct = products.filter((item) => {
        const name = item.title.toLowerCase();
        return name.includes(navSearch);
    });

    return (
        <>
            <NavbarPage />

            <Container>
                <Cont_1>
                    {searchedPdct.map((item) => (
                        <Card
                            key={item.id}
                            className="shadow p-3 mb-5 bg-body-tertiary rounded"
                            style={{ width: "18rem", margin: "2rem", textAlign: "center" }}
                        >
                            <Card.Img variant="top" src={item.img} style={{ height: "200px", objectFit: "contain" }} />
                            <Card.Body>
                                <Card.Title style={{ padding: "1rem 0 1rem" }}>{item.title}</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle> */}
                                <Card.Text>₹ {item.price}</Card.Text>
                                <Button onClick={() => Navigate(`/view/${item.id}`)} variant="outline-secondary">
                                    VIew Details
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Cont_1>
            </Container>

            <Footer />
        </>
    );
};

export default User_Search;
