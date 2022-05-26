import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Check from '../assets/check.svg'
import UserContext from "../Context/UserContext";






export default function RenderPost({ dados ,config,atualizaHoje,progress}) {
    const [check, setCheck] = React.useState(dados.done)
    const body = { };
   progress()
    function feito() {
        if(check === false){
            
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dados.id}/check`, body, config)
            promise.then(()=> atualizaHoje())
            setCheck(true)
            
        }
        if(check === true){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dados.id}/uncheck`,body, config)
            promise.then(()=> atualizaHoje())
            setCheck(false)
            
           
        }
    }
    return (
        <Post>
            <div>
                <h3>{dados.name}</h3>
                <p>Sequência atual: {dados.currentSequence}</p>
                <p>Seu Recorde: {dados.highestSequence}</p>
            </div>
            <Feito src={Check} feito={check } onClick={() => feito()} alt="check">

            </Feito>
        </Post>
    )
}
const Feito = styled.img`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background-color: ${props => props.feito ? '#8FC549' : '#E7E7E7'};
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