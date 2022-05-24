import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import TopBar from "./TopBar";
export default function Hoje(){
    const{userData, setUserData} = useContext(UserContext)
    console.log(userData)
    return(
        <>
        <TopBar />
        </>
    )
}