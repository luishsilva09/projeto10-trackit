import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import Logo from '../assets/TrackIt.png';

export default function TopBar(){
    const{userData} = useContext(UserContext)
    return(
        <Container >
            <img src={Logo} alt="logo escrita"/>
            <Perfil src={userData.image} alt="Fotoperfil"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
`
const Perfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    object-fit: cover;
    

`