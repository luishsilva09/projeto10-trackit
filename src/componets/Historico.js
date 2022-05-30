import Footer from "./Footer";
import TopBar from "./TopBar";
import styled from "styled-components";

export default function Historico(){
    
    return(
        <>
        <TopBar/>
        <Container>
            <h1>Historico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Container>
        <Footer/>
        </>
    )
}

const Container = styled.div`
    padding-top:110px;
    background:#E5E5E5 ; 
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    h1{
        width: 340px;
        font-size: 23px;
        color: #126ba5;
        margin-bottom: 17px;
    }
    h2{
        width: 340px;
        font-size:18px;
        color:#bababa;
        margin-bottom: 28px;
    }
`
