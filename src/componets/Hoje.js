import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Check from '../assets/check.svg'
import axios from "axios";
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
dayjs.locale('pt-br')

    
function RenderPost(){
    return(
        <Post>
                        <div>
                        <h3>ler</h3>
                        <p>Sequencia atual</p>
                        <p>Seu Recorde</p>
                        </div>
                        <Feito src={Check} alt="check">

                        </Feito>
                    </Post>
    )
}
export default function Hoje() {
    const { userData } = useContext(UserContext)
    const [habitosHoje, setHabitosHoje] = React.useState([])
    const semana =['Domingo','Segunda','Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    let now = dayjs()
    console.log()
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.token}`
        }
    }
    React.useEffect(() => {
        atualizaHoje()
    },[])
    function atualizaHoje(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config)
        promise.then((response) => setHabitosHoje(response.data))
    }
    
    return (
        <Container>
                <TopBar />
                    <h1>{semana[now.$W]}, {now.$D}/{now.$M}</h1>
                    <h2>Nenhum habito concluido hoje</h2>
                    {habitosHoje.map((e) => <RenderPost dados={e}/>)}
                <Footer />
            
        </Container>
    )
}

const Container = styled.div`
    margin-top:90px;
    background:#E5E5E5 ;
    padding: 17px;
    h1{
        font-size: 23px;
        color: #126ba5;
    }
    h2{
        font-size:18px;
        color:#bababa;
        margin-bottom: 28px;
    }
`
const Post = styled.div`
    width: 95%;
    height: auto;
    min-height: 94px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom:10px ;
    padding: 14px;
    display: flex;
    justify-content: space-between;

    h3{
        font-size: 20px;
        color:#666666;
    }
    p{
       font-size :13px ;
       color:#666666;
    }
`
const Feito =styled.img`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background-color: #E7E7E7;
`