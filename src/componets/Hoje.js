import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import Footer from "./Footer";
import TopBar from "./TopBar";
export default function Hoje() {
    const { userData } = useContext(UserContext)
    console.log(userData)
    return (
        <Container>
                <TopBar />

                <Footer />
            
        </Container>
    )
}

const Container = styled.div`
    background:#E5E5E5 ;
`