import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../assets/Logo.svg';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { userData,setUserData } = useContext(UserContext);
    const [load, setLoad] = React.useState(false);
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    });
    

    function logar(event) {
        event.preventDefault();
        setLoad(true);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', login);
        promise.then(function (response) {
            setUserData(response.data)
            
            navigate('/hoje')
            
        });
        promise.catch(function () {
            setLoad(false)
            alert("Email ou senha incorretos")
        });
    };

    return (
        <Container>
            <img src={Logo} alt="Logo trakit" />
            <Form onSubmit={(event) => logar(event)} ativa={load}>
                <input
                    type='email'
                    placeholder="email"
                    value={login.email}
                    disabled={load}
                    onChange={(e) => setLogin({ ...login, email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder="senha"
                    value={login.password}
                    disabled={load}
                    onChange={(e) => setLogin({ ...login, password: e.target.value })}
                />
                <button disabled={load} type="submit">{load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : <p>Entrar</p>}</button>
            </Form>
            <Link to='/cadastro'> <p>Não tem uma conta? Cadastre-se!</p> </Link>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
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
        font-size: 21px;
        color:#fff;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        border:none;
        display: flex;
        align-items: center;
        justify-content: center;
        
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