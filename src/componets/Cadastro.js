import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../assets/Logo.svg';
import axios from 'axios';
import React from "react";

export default function Cadastro(){
    const navigate = useNavigate()
    const [cadastro, setCadastro] =React.useState({
        email:'',
        name: '',
        image: '',
        password:''
    })
    function cadastrar(event){
        event.preventDefault()
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',cadastro)
        promise.then(()=> navigate('/'))
        promise.catch(err => alert("Desculpe tente mais tarde"))
        
    }
    return(
        <Container>
           <img src={Logo} alt="logo taskit"/>
           <Form onSubmit={(event) => cadastrar(event)}>
               <input type="email" placeholder="email" value={cadastro.email} onChange={(e) => setCadastro({...cadastro,email :e.target.value})}></input>
               <input type="password" placeholder="senha" value={cadastro.senha} onChange={(e) => setCadastro({...cadastro ,password:e.target.value})}></input>
               <input type="text" placeholder="nome" value={cadastro.name} onChange={(e) => setCadastro({...cadastro ,name:e.target.value})}></input>
               <input placeholder="foto" value={cadastro.image} onChange={(e) => setCadastro({...cadastro ,image:e.target.value})}></input>
               <button type="submit">Cadastrar</button>
           </Form>
           <Link to="/"><p>Já tem uma conta? Faça login</p></Link>
        </Container>
    )
}
const Container = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        font-size:14px;
        color:#52b6ff;
        text-decoration: underline;

        &:hover{
            cursor:pointer;
            filter: brightness(130%);
        }
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    
    input{
        height: 45px;
        width: 303px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 20px;
        padding: 5px;
        
    &::placeholder{
        color:#DBDBDB;
    }
    }

    button{
        height: 45px;
        width: 303px;
        font-size: 21px;
        color:#fff;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        border:none;

        &:hover{
            cursor:pointer;
            filter: brightness(130%);
        }
    }
    
`