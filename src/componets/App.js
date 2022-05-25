
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './globalStyles';
import Login from './Login';
import Cadastro from './Cadastro';
import Habitos from './Habitos';
import Hoje from './Hoje';
import Historico from './Historico';
import UserContext from "../Context/UserContext";
import ProgressoContext from "../Context/ProgressoContext";
import React from "react";

export default function App() {
    const [userData, setUserData] = React.useState([])
    const [progresso, setProgresso] = React.useState([99])
    return (
        <UserContext.Provider value={{userData, setUserData}}>
        <ProgressoContext.Provider value={{progresso, setProgresso}}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/habitos' element={<Habitos />} />
                    <Route path='/hoje' element={<Hoje />} />
                    <Route path='/historico' element={<Historico />} />
                </Routes>
            </BrowserRouter>
            </ProgressoContext.Provider>
        </UserContext.Provider>
    )
}