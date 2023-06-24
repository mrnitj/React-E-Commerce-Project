import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

// styled

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    background-color: rgba(235, 167, 167, 0.685);
    /* border:1px solid black; */
    border-radius: 50% 10% 50% 10%  ;
    &:hover{
        
    }
    
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10% 50% 10% 50%;
    &:hover{
               
    }
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    letter-spacing: 20px;
    align-items: center;
    justify-content: center;
    &:hover{
        transform: scale(1);
    }
`;
const Title = styled.h1`
    color: #000000;
    margin: 1rem;
    &:hover{
        transform: scale(1.1);
        
        
    }
`;
const Button = styled.button`
    background: transparent;
    padding: 0.5rem;
    border-style: solid;
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.15s;
    &:hover{
        background-color: lightblue;
    }
`;

// ----------------------------------------

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Link to={item.path} element={item.comp}>
                    <Button>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>

    );
};

export default CategoryItem;
