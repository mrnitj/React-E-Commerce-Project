import React, { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";
import { Context } from "../Context/Context_api";
import { useNavigate, useParams } from "react-router-dom";

const Main_Container = styled.div`
    height: 100vh;
    background-color: #494444;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;

const Cont_1 = styled.div`
    /* background-color: lightcyan; */
    height: 80%;
    width: 70%;
    display: flex;
    padding:2rem;
    
`;

const Inputs = styled.div`
 /* background-color: #d8caca; */
 width: 100%;
 display: flex;
 flex-direction: column;
 color: white;

 
`;

const AdminEdit = () => {

    const Navigate = useNavigate()
    const {products} =useContext(Context)

    const {idedit} = useParams()
    console.log(products);
    const object=products.filter((item)=>item.id==idedit)
    console.log(object);

    const [edit,setEdit]=useState(object[0]);



    const editHandler = (e) =>{
      const name = e.target.name;
      const value = e.target.value;

      setEdit((prev) => {
        return({...prev,[name]: value});
      });

    }

    const editConfirm = (id) => {
      const itemIndex = products.findIndex(item => item.id ===id)

      products[itemIndex] =edit;
    }

    const handleSubmit = (e) =>{
      e.preventDefault ()
      Navigate ('/collection')
    }
    

    return (
      
      

    <Main_Container>
    
    


      <Cont_1 >
      
      
      <Inputs   >
    <form onSubmit={handleSubmit} action="" style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>

      <label htmlFor="">Item Id</label>
      <input value={edit.id} onChange={editHandler} className="additem" type="number" name="id"  />
      <label  htmlFor="">Item Image/url path</label>
      <input value={edit.img} onChange={editHandler} className="additem" type="text"  name="img"  />
      <label htmlFor="">Item Name</label>
      <input value={edit.title} onChange={editHandler} className="additem" type="text" name="title"   />
      <label htmlFor="">Item Price</label>
      <input value={edit.price} onChange={editHandler} className="additem" type="number" name="price"  />
      <label htmlFor="">Item Model</label>
      
      <select value={edit.model} onChange={editHandler} name="model" id="">
                <option value="dress">Dress</option>
                <option value="footwear">Footwear</option>
                <option value="toys">Toys</option>
    </select>
      <label htmlFor="">Item Discription</label>
      <textarea className="additem" name="" id="" cols="30" rows="10"/>
      <Button onClick={editConfirm(edit.id)}  variant="outline-secondary" style={{fontSize:"20px"}}>Edit</Button>
      
        </form>
      </Inputs>
       
        </Cont_1>
    

      
      
</Main_Container>
 )

}
export default AdminEdit