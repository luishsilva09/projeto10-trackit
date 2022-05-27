import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../assets/Logo.svg';
import axios from 'axios';
import React from "react";
import { ThreeDots } from 'react-loader-spinner'

export default function Cadastro() {
    const navigate = useNavigate();
    const [load, setLoad] = React.useState(false)
    const [cadastro, setCadastro] = React.useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })
    function cadastrar(event) {
        event.preventDefault()
        if (isImage(cadastro.image) === true || cadastro.image === "") {
            setLoad(true)
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', cadastro)
            promise.then(() => navigate('/'))
            promise.catch(function () {
                alert("Desculpe tente novamente mais tarde")
                setLoad(false)
            })
        }else{
            return(alert("imagem invalida"))
        }
    }
    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }




    return (
        <Container>
            <img src={Logo} alt="logo taskit" />
            <Form onSubmit={(event) => cadastrar(event)} ativa={load} >
                <input
                    type="email"
                    disabled={load}
                    placeholder="email"
                    value={cadastro.email}
                    onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                    required
                />
                <input
                    type="password"
                    disabled={load}
                    placeholder="senha"
                    value={cadastro.senha}
                    onChange={(e) => setCadastro({ ...cadastro, password: e.target.value })}
                    required
                />
                <input
                    type="text"
                    disabled={load}
                    placeholder="nome"
                    value={cadastro.name}
                    onChange={(e) => setCadastro({ ...cadastro, name: e.target.value })}
                    required
                />
                <input
                    placeholder="foto"
                    disabled={load}
                    value={cadastro.image}
                    onChange={(e) => setCadastro({ ...cadastro, image: e.target.value })}
                />
                <button
                    disabled={load}
                    type="submit" >
                    {load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : <p>Cadastrar</p>}
                </button>
            </Form>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
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
        background-color: ${props => props.ativa ? "#F2F2F2" : "#FFFFFF"};
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
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        border:none;

        p{
            font-size: 21px;
            color:#fff;
            text-decoration: none;
        }
        &:hover{
            cursor:pointer;
            filter: brightness(130%);
        }
    }
    
`