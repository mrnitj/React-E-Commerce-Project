import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { styled } from "styled-components";
import { Context } from "../Context/Context_api";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100%;
background-color: #494444;
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

const Product= styled.div`
height: 100%;
border: 1px solid black;
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
padding: 1rem;
color: #fffcfc;
`;

const Input = styled.div`
    width: 50%;
    margin-bottom: 2rem;
`;

const Products = () => {
    
    const Navigate =useNavigate();

    const { products, setProducts, poductSearch ,setProductSearch } = useContext(Context);

    // const data = products;

    const Remove = (e) => {
        const removeId = parseInt(e.target.id);
        const balanceId = products.filter((item) => item.id !== removeId);
        setProducts(balanceId);
    };

    const searchDetails =products.filter((item) => {
        const name = item.title.toLowerCase()
        return name.includes(poductSearch)
    })

    const searchHandler = (e) => {
        setProductSearch((e.target.value).toLowerCase())
    }


    return (
        <MainContainer>
            <Input>
                <input className="productsearch" type="text" placeholder="search" onChange={searchHandler} />
            </Input>
        <Cont_1>
            <Cont_2>
                {searchDetails.map((item) => (


                <Product key={item.id}>
                <div style={{height:'100%', display:'flex' , alignItems:'center',justifyContent:'space-between',width:'80%'}}>

                <div className="productImg" style={{height:'100%',flex:'1'}}><img src={item.img} alt="" style={{objectFit:"contain", height:"100%"}} /></div>
                <div className="productTitle" style={{flex:'1'}}><p>{item.title}</p></div>
                <div className="productQty" style={{flex:'1'}}>
                

                <input type="text" placeholder={(item.qty)}/>

                
                </div>
                <div className="productPrice"  style={{flex:'1'}}><p>₹ {item.price}</p></div> 
                </div>
                <div style={{height:'100%',display:'flex', alignItems:'center',justifyContent:'center'}}>
                
                <Button onClick={() => Navigate(`/adminedit/${item.id}`)} variant='outline-secondary' className='ms-3'>Edit</Button>
                <Button onClick={Remove} id={item.id} variant='outline-danger' className='ms-3'>Remove</Button>
                </div>       
                </Product>
                ))}
                
            </Cont_2>

        </Cont_1>
    </MainContainer>
    );
};

export default Products;
