import styled from "styled-components";
import Footer from "./Footer";
import TopBar from "./TopBar";
import AddHabito from "./AddHabito";
import React, { useContext } from "react";
import ListaHabitos from "./ListaHabitos";
import UserContext from "../Context/UserContext";
import axios from "axios";

function Render({ habitos, atualiza}){
    const [habito, setHabito] = React.useState([])
    function mais() {
        setHabito(<AddHabito setHabito={setHabito} atualiza={atualiza} />)

    }
    return(
        <>
        <TopBar />
            <Main>
                <h1>
                    Meus hábitos <Mais onClick={mais}>+</Mais>
                </h1>
                {habito}
                {habitos.map((e, index) => <ListaHabitos key={index} name={e.name} days={e.days} id={e.id} atualiza={atualiza} />)}
                {habitos.length > 0 ? "" :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </Main>
            <Footer />
        </>
    )
}
export default function Habitos() {
    const [habitos, setHabitos] = React.useState([])
    const { userData } = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.token}`
        }
    }
    
    React.useEffect(() => { 
        
        atualiza()
    }, [])
function atualiza(){
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then((response) => setHabitos(response.data))
}
    
    
    return (

        <>
            <Render  habitos={habitos} atualiza={atualiza}/>
        </>
    )
}

const Main = styled.div`
    margin-top:90px;    
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    margin-bottom: 90px;
    
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