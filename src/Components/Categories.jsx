// import React from 'react'
import styled from "styled-components";

import { categories } from "../data";
import CategoryItem from "./CategoryItem";

// styeled

const Container = styled.div`
    background-color: rgba(236, 208, 208, 0.63);

    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

// -----------------------------------

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;
