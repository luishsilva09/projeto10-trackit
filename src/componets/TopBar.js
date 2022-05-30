import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import Logo from '../assets/TrackIt.png';
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const { userData } = useContext(UserContext)
    const navigate = useNavigate();
    function sair() {
        const sair = window.confirm("Quer realmente sair?")
        if (sair === true) {
            navigate('/')
        }
    }
    return (
        <Container >
            <img src={Logo} onClick={sair} alt="logo escrita" />
            <Perfil src={userData.image} alt="Fotoperfil" />
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