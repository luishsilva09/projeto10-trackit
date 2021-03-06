import axios from "axios"
import UserContext from "../Context/UserContext";
import React, { useContext } from "react"
import styled from "styled-components";
import Lixo from '../assets/lixo.svg'

export default function ListaHabitos({ name, days, id, atualiza }) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const { userData } = useContext(UserContext);

    function RenderCheck(e, index) {
        let diasCheck = days.includes(index)
        if (diasCheck === true) {
            return (
                <Check key={index} cor={true}>{e}</Check>
            )

        } else {
            return (
                <Check key={index} cor={false}>{e}</Check>
            )
        }
    }
    function deletar(id) {
        let confirm = window.confirm("tem certeza que quer deletar esse habito?")
        if (confirm === true) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
            }
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promise.then(() => atualiza())
        }

    }
    return (
        <>
            <Container>
                <h1>{name}<Delete src={Lixo} alt="deletar" onClick={() => deletar(id)} /></h1>

                <Dias>
                    {dias.map((e, index) => RenderCheck(e, index))}
                </Dias>

            </Container>
        </>
    )
}

const Container = styled.div`
    width: 95%;
    height: auto;
    min-height: 91px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    max-width: 340px;
    padding:12px;
    word-break: break-all;
    h1{
        margin: 8px;
        color: #666666;
        font-size: 20px;
    }
`
const Delete = styled.img`
    cursor: pointer;
    &:hover{
            cursor:pointer;
            filter: brightness(130%);
        } 

`
const Check = styled.div`
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        display: flex;
        justify-content: center;
        align-items: center;
        color:${props => props.cor ? '#fff' : '#DBDBDB'};
        background-color: ${props => props.cor ? '#CFCFCF' : '#fff'};
        margin-left: 4px;;
`
const Dias = styled.div`
    display: flex;
`