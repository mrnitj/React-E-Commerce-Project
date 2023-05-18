import React, { useContext } from "react";
import { styled } from "styled-components";
import "./Admin.css";
import { Context } from "../Context/Context_api";
import { useParams } from "react-router-dom";

const MainCont = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #494444;
    padding: 8rem;
`;

const Cont_1 = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid black;
    /* background-color: #7dc5ad; */
    display: flex;
`;

const Left_cont = styled.div`
    /* background-color: #444546; */
    height: 100%;
    width: 35%;
    padding: 3rem;
`;

const Right_cont = styled.div`
    /* background-color: #344d65; */
    height: 100%;
    flex: 1;
    padding: 5rem;
    color: white;
`;

const SingleUser = () => {
    const { signup } = useContext(Context);
    const { idpara } = useParams();
    console.log(idpara);
    const datas = signup.filter((item) => item.userName === idpara);
    const data = datas[0];
    console.log(data);

    return (
        <MainCont>
            <Cont_1>
                <Left_cont>
                    <div className="userimage"></div>
                </Left_cont>
                <Right_cont className="rightusr">
                    <h2>Name : {data.userName}</h2>
                    <h4>E mail: {data.userEmail}</h4>
                    <h4>Password: {data.userPassword}</h4>
                    <label htmlFor="">Product details</label>
                </Right_cont>
            </Cont_1>
        </MainCont>
    );
};

export default SingleUser;
