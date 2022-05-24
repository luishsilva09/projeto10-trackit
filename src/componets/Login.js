import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../assets/Logo.svg'

export default function Login() {
    return (
        <Container>
            <img src={Logo} alt="Logo trakit" />
            <Form>
                <input type='email'placeholder="email"></input>
                <input type='password' placeholder="senha"></input>
                <button>Entrar</button>
            </Form>
            <Link to='/cadastro'> <p>Não tem uma conta? Cadastre-se!</p> </Link>
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