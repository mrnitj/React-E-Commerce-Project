import React, { useContext } from "react";
import { styled } from "styled-components";
import "./Admin.css";
import { Context } from "../Context/Context_api";

import { FiUser } from "react-icons/fi";
import { BsFillKeyFill } from "react-icons/bs";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import SingleUser from "./SingleUser";

const MainCont = styled.div`
    background-color: #494444;
    width: 100vw;
    height: 100vh;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Cont_1 = styled.div`
    /* background-color: #f1cef0; */
    width: 70%;
    overflow: auto;
    padding: 1rem;
    height: 70vh;
`;
const Cont_2 = styled.div`
    /* background-color: #ebdfeb; */
    border: 1px solid black;
    width: 100%;

    padding: 0.1rem;
    margin-bottom: 0.6rem;
`;
const Cont_3 = styled.div`
    display: flex;
    color: white;
    /* justify-content: space-between; */

    /* background-color: #cc34c7; */
`;

const Input = styled.div`
    margin-bottom: 2rem;
    width: 50%;
`;

const AdminUsers = () => {
    const Navigate = useNavigate();
    const { signup } = useContext(Context);

    return (
        <MainCont>
            <Input>
                <input className="userSearch" type="text" placeholder="Search" />
            </Input>
            <Cont_1>
                {signup.map((item) => (
                    <Cont_2>
                        <Cont_3>
                            <FiUser
                                onClick={() => Navigate(`/singleuser/${item.userName}`)}
                                style={{ fontSize: "30px", margin: "1rem", cursor: "pointer" }}
                            />

                            <div className="ps1">
                                <p>{item.userName}</p>{" "}
                            </div>
                            <div className="ps2">
                                <p>{item.userEmail}</p>
                            </div>
                            <div className="ps3">
                                <p>
                                    <BsFillKeyFill />
                                    &nbsp;{item.userPassword}
                                </p>
                            </div>
                        </Cont_3>
                    </Cont_2>
                ))}
            </Cont_1>
        </MainCont>
    );
};

export default AdminUsers;
