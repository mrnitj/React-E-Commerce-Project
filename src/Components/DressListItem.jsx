import React, { useContext } from 'react'



import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
import { Context } from './Context/Context_api';
// import Context from './Context/Context_api';


// ------------------------

const Container = styled.div`
display: flex;

`;

const Cont_1 =styled.div `

display: flex;
flex-wrap: wrap;
justify-content: space-evenly;

`;



const DressListItem = () => {

const Navigate = useNavigate();
const {products} = useContext(Context)

const data= products.filter((item) =>item.model ==='dress')

  return (

    <Container>
          <Cont_1>

            {data.map((item) => (
                   <Card key={item.id}   className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem',margin: "2rem", textAlign:"center" }}>
                   <Card.Img variant="top" src={item.img} style={{height:"200px",objectFit:"contain" }}/>
                   <Card.Body style={{padding:"1rem 0 1rem"}}>
                     <Card.Title>{item.title}</Card.Title>
                     {/* <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle> */}
                     <Card.Text>₹ {item.price}</Card.Text>
                     <Button onClick={() =>Navigate(`/view/ ${item.id}`)} variant="outline-secondary">VIew Details</Button>
                   </Card.Body>
                 </Card>
            ))}
          </Cont_1>
        </Container>
  )
}

export default DressListItem