// import React from 'react'
// import { styled } from 'styled-components'

// import './Democart.css'

// const MainContainer = styled.div`
// height: 100vh;
// background-color: aqua;
// padding: 5rem 7rem 5rem;
// `;

// const Cont_1 = styled.div`
// height: 100%;
// background-color: lightblue;
// padding: 2rem;
// `;

// const Cont_2 = styled.div`
// height: 100%;
// background-color: #191f20;
// height: 30%;
// padding: 0.5rem;
// `;

// const Product= styled.div`
// height: 100%;
// background-color: #ffffff;
// height: 100%;
// width: 100%;
// display: flex;
// justify-content: space-around;
// align-items: center;
// `;




// const Democart = () => {
//   return (

//     <MainContainer>
//         <Cont_1>
//             <Cont_2>
//                 {cart.map((item) => (


//                 <Product key={item.id}>
//                 <div className="productImg"><img src={item.img} alt="" /></div>
//                 <div className="productTitle"><p>{item.title}</p></div>
//                 <div className="productQty">
//                 <button className='pdtbtn'>Add</button>
//                 <input type="text" placeholder='monee'/>
//                 <button className='pdtbtn'>Minuys</button>    
//                 </div>
//                 <div className="productPrice"><p>{item.price}</p></div> 
                       
//                 <Button onClick={Remove} id={item.id} variant='outline-danger' className='ms-3'>Remove</Button>
//                 </Product>
//                 ))}
                
//             </Cont_2>

//         </Cont_1>
//     </MainContainer>
//   )
// }

// export default Democart