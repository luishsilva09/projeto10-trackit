import styled from "styled-components";
import Footer from "./Footer";
import TopBar from "./TopBar";
import AddHabito from "./AddHabito";
import React, { useContext } from "react";
import ListaHabitos from "./ListaHabitos";
import UserContext from "../Context/UserContext";
import axios from "axios";
import { TailSpin } from 'react-loader-spinner'

function Render({ habitos, atualiza, load }) {
    const [habito, setHabito] = React.useState([])
    const [display, setDisplay ]= React.useState("none")
    
    function mais() {
        setDisplay("flex")

    }
    return (
        <Container>
            <TopBar />
            {load ? <Main><TailSpin color="#00BFFF" height={80} width={80} /></Main> :<Main>
                <h1>
                    Meus hábitos <Mais onClick={mais}>+</Mais>
                </h1>
                <Adicionar display={display}><AddHabito setHabito={setHabito} atualiza={atualiza} setDisplay={setDisplay}/></Adicionar>
                {habito}
                {habitos.map((e, index) => <ListaHabitos key={index} name={e.name} days={e.days} id={e.id} atualiza={atualiza} />)}
                {habitos.length > 0 ? "" :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </Main>}
            <Footer />
        </Container>
    )
}
export default function Habitos() {
    const [habitos, setHabitos] = React.useState([])
    const { userData } = useContext(UserContext)
    const [load, setLoad] = React.useState(true)
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.token}`
        }
    }

    React.useEffect(() => {

        atualiza()
    }, [])
    function atualiza() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then(function (response) {
            setHabitos(response.data)
            setLoad(false)
        })
    }


    return (
        <>
         <Render habitos={habitos} atualiza={atualiza} load={load}/>
        </>
    )
}
const Adicionar = styled.div`
width: 340px;
display: ${props => props.display};
`
const Container = styled.div`
background:#E5E5E5 ;
min-height: 100vh;
max-height: 100%;
`
const Main = styled.div`
    padding-top:110px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 110px;
    
    h1{
        font-size: 23px;
        color:#126BA5;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        width: 95%;
        max-width: 340px;
    }
    
    p{
        font-size: 18px;
        color:#666666;
        line-height: 22px;
        max-width: 340px;
    }

`
const Mais = styled.button`
    height: 35px;
        width: 40px;
        border:none;
        border-radius: 5px;
        font-weight: 700;
        color:#fff;
        background-color:#52B6FF ;
        font-size: 27px;

        &:hover{
            cursor:pointer;
            filter: brightness(130%);
        }  
`