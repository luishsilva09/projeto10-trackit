import styled from "styled-components";
import { Link } from "react-router-dom";
import ProgressoContext from "../Context/ProgressoContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useContext } from "react";
import '../assets/Progress.css'

export default function Footer() {
    const { progresso } = useContext(ProgressoContext)

    return (
        <Container>
            <NavLink to="/habitos">
                <h1>Hábitos</h1>
            </NavLink>
            <NavLink to="/hoje">
                <Teste>
                <CircularProgressbar
                    value={progresso}
                    text={`Hoje`}
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor:'#52B6FF',
                        textColor:'#FFFFFF',
                        textSize:'18px',
                        trailColor: '#52B6FF',
                        pathColor:'#fff'
                    })}
                /></Teste>
            </NavLink>
            <NavLink to="/historico">
                <h1>Histórico</h1>
            </NavLink>
        </Container>
    )
}
const Teste = styled.div`
    height: 91px;
    width: 91px;
    margin-bottom: 50px;
`

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