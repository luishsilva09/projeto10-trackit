import axios from "axios"
import React,{ useContext } from "react"
import styled from "styled-components"
import UserContext from "../Context/UserContext";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

export default function AddHabito({ setHabito }) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [diasSelecionado, setDiasSelecionados] = React.useState([])
    const[nomeHabito,setNomeHabito] = React.useState([])
    const{userData} = useContext(UserContext);
    const [load, setLoad] = React.useState(false);
    let navigate = useNavigate();
    
    function cancelar() {
        
        setHabito([])
    }
    function RenderCheck(e, index) {
        const [color, setColor] = React.useState(false)

        function seleciona(element) {
            if (color == true) {
                setColor(false)
                setDiasSelecionados( diasSelecionado.filter((e) => e != index ? index : ''))
            } else {
                setColor(true)
                setDiasSelecionados([...diasSelecionado, index])
            }     
        }
        return (
            <Check  key={index} onClick={load ? none : (element) => seleciona(element)} cor={color}>{e}</Check>
        )
    }
    function salvar(){
        const body = {
            name: nomeHabito,
            days: diasSelecionado
        }
        const config = {
            headers:{
                "Authorization": `Bearer ${userData.token}`
            }
        }
        setLoad(true)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',body, config)
        promise.then(function(response) {
            setHabito([])
            
            
            
        })
        promise.catch(function(response){
            setLoad(false)
            alert("Tente mais tarde" )
        })
        
    }
    function none(){

    }
    return (
        <Container>
            <input
                type='text'
                placeholder='nome do habito' 
                value={nomeHabito}
                onChange={(e) => setNomeHabito(e.target.value)}
                disabled={load}
                />
            <Dias>
                {dias.map((e, index) => RenderCheck(e, index))}

            </Dias>
            <Finalizar>
                <Cancelar onClick={cancelar}>Cancelar</Cancelar>
                <Salvar onClick={load ? none: salvar}>{load ? <ThreeDots color="#FFFFFF" height={50} width={50} /> : <>Salvar</>}</Salvar>
            </Finalizar>

        </Container>
    )
}

const Container = styled.div`
    width: 95%;
    max-width: 340px;
    height: 180px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    align-items: center;
    padding: 18px;
    flex-direction: column;
    position: relative;
    margin-bottom: 10px;

    input{
        height: 45px;
        width: 95%;
        background-color:  "#FFFFFF";
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 20px;
        padding: 5px;
        
    &::placeholder{
        color:#DBDBDB;
    }
    }
`
const Dias = styled.div`
    display: flex;
    cursor: pointer;
    width: 95%;
    max-width: 340px;
    
    
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
const Cancelar = styled.div`
    color:#52B6FF;
    font-size: 16px;
    margin-right: 23px;
    
    &:hover{
            cursor:pointer;
            filter: brightness(130%);
        }  
`
const Salvar = styled.div`
        height: 35px;
        width: 84px;
        border:none;
        border-radius: 5px;
        color:#fff;
        background-color:#52B6FF ;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            cursor:pointer;
            filter: brightness(130%);
        }  
`
const Finalizar = styled.div`
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

`