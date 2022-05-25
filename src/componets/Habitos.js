import styled from "styled-components";
import Footer from "./Footer";
import TopBar from "./TopBar";
import AddHabito from "./AddHabito";
import React from "react";


export default function Habitos() {
    const [habito, setHabito] = React.useState([])
    function mais(){
        setHabito(<AddHabito setHabito={setHabito}/>)
    }
    return (

        <>
            <TopBar />
            <Main>
                <h1>
                    Meus hábitos <Mais onClick={mais}>+</Mais>
                </h1>
                {habito}
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Main>
            <Footer />
        </>
    )
}

const Main = styled.div`
    margin-top:90px;    
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    
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