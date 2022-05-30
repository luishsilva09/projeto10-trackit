import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import Footer from "./Footer";
import TopBar from "./TopBar";
import ProgressoContext from "../Context/ProgressoContext";
import { TailSpin } from  'react-loader-spinner'
import axios from "axios";
import dayjs from 'dayjs'
import RenderPost from "./RenderPostHoje";

dayjs.locale('pt-br')

export default function Hoje() {
   
    const { userData } = useContext(UserContext)
    const [habitosHoje, setHabitosHoje] = React.useState([])
    const [load, setLoad] = React.useState(true)
    const {progresso, setProgresso} = useContext(ProgressoContext)
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let now = dayjs()
    const config = {
        headers:{
            "Authorization": `Bearer ${userData.token}`
        }
    }
    
    React.useEffect(() => {
        atualizaHoje()
    }, [])
    function atualizaHoje() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(function(response){
            setHabitosHoje(response.data)
            setLoad(false)
        })
        
    }
    function progress(){
        let total = habitosHoje.length
        let feitos = 0
        habitosHoje.map((e)=>{
            if(e.done === true){
                feitos += 1
            }
        return('')
        })
        setProgresso(feitos/total*100)
    }
    return (
        <>
            <TopBar />
            {load ? 
            <Container><TailSpin color="#00BFFF" height={80} width={80} /></Container>
            :<Container>
                <h1>{semana[now.$W]}, {now.$D}/{now.$M < 10 ? `0${now.$M }` : `${now.$M }`}</h1>
                {progresso === 0 ? <h2>Nenhum habito concluido ainda</h2> : <h3>{progresso.toFixed()}% dos habitos concluidos</h3>}
    
                { habitosHoje.map((e,index) => <RenderPost key={index} dados={e} config={config} atualizaHoje={atualizaHoje} progress={progress}/>)}
            </Container>}
            <Footer />
        </>

    )
}

const Container = styled.div`
    padding-top: 110px;
    background:#E5E5E5 ;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    max-width: 100%;
    word-break: break-all;
    h1{
        width: 340px;
        font-size: 23px;
        color: #126ba5;
    }
    h2{
        width: 340px;
        font-size:18px;
        color:#bababa;
        margin-bottom: 28px;
    }
    h3{
        width: 340px;
        font-size:18px;
        color:#8FC549;
        margin-bottom: 28px;
    }
`

