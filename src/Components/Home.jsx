import React, { useContext } from 'react'
import "./Home.css";

import { MdLocalOffer } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Categories from './Categories';
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import { Context } from './Context/Context_api';

const Home = () => {
    const {signup} =useContext(Context);
    console.log(signup);
   
  return (
    <>
    <NavbarPage/>
    <div className="cont-1">
                <div className="main-1">
                    <div className="left">
                        <div className="left-offer">
                            <s style={{ Color: "pink", marginRight: "1rem" }}>
                                <MdLocalOffer />
                            </s>
                            FLAT 30% OFF + CASHBACK! *
                        </div>
                        <div className="left-head">
                            Baby Essential <br />
                            Fashion & Nursery
                        </div>
                        <div className="left-para">
                            Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi
                            quis elit elementum tristique urna.
                        </div>
                        <p style={{marginTop:"2rem"}}>* Enim cras quam et nullam risus nec tincidunt mattis nunc.</p>
                        <div className="left-bottom">
                            
                        <Button className="left-btn" variant="light">SHOP NOW</Button>
                        <p>Use code: BEC30</p> 
                        </div>
                       
                    </div>
                    <div className="right"></div>
                </div>
            </div>

            <Categories/>

            <Footer/>
    </>
  )
}

export default Home