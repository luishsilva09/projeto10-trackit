import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import Footer from "./Footer";
import TopBar from "./TopBar";
import ProgressoContext from "../Context/ProgressoContext";

import axios from "axios";
import dayjs from 'dayjs'
import RenderPost from "./RenderPostHoje";

dayjs.locale('pt-br')




export default function Hoje() {
    const { userData } = useContext(UserContext)
    const [habitosHoje, setHabitosHoje] = React.useState([])
    const {progresso, setProgresso} = useContext(ProgressoContext)
    const [load, setLoad] = React.useState(false)
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    let now = dayjs()
    const config = {
        headers:{
            "Authorization": `Bearer ${userData.token}`
        }
    }
    
   
    console.log(progresso)
    React.useEffect(() => {
        atualizaHoje()
    }, [])
    function atualizaHoje() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(function(response){
            setHabitosHoje(response.data)
            
        })
        
    }
    function progress(){
        let total = habitosHoje.length
        let feitos = 0
        habitosHoje.map((e)=>{
            if(e.done === true){
                feitos += 1
            }
        })
        setProgresso(feitos/total*100)
    }
    return (
        <>
            <TopBar />
            <Container>
               
                <h1>{semana[now.$W]}, {now.$D}/{now.$M}</h1>
                {progresso === 0 ? <h2>Nenhum habito concluido ainda</h2> : <h3>{progresso}% dos habitos concluidos</h3>}
    
                { habitosHoje.map((e,index) => <RenderPost key={index} dados={e} config={config} atualizaHoje={atualizaHoje} progress={progress}/>)}


            </Container>
            <Footer />
        </>

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
    h3{
        font-size:18px;
        color:#8FC549;
        margin-bottom: 28px;
    }
`

