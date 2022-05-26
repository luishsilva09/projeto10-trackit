import styled from "styled-components";
import { Link } from "react-router-dom";
import ProgressoContext from "../Context/ProgressoContext";
import { CircularProgressbar } from 'react-circular-progressbar'
import { useContext } from "react";

export default function Footer() {
    const {progresso, setProgresso} = useContext(ProgressoContext)

    return (
        <Container>
        <NavLink to="/habitos">
            <h1>Hábitos</h1>
        </NavLink>
        <NavLink to="/hoje">
            <h1>Hoje</h1>
            {typeof progresso == 'number' ? progresso.toFixed(): progresso}%
        </NavLink>
        <NavLink to="/historico">
            <h1>Histórico</h1>
            </NavLink>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    left:0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:36px ;
    padding-right: 36px;
    background-color: #fff;
    

   h1{
        font-size: 18px;
        color:#52B6FF;
    }
    
    
`
const NavLink = styled(Link)`
  text-decoration: none;
  
  &:hover{
    cursor:pointer;
    filter: brightness(130%);
}
`