import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import api from '../../services/api';
import UserContext from './contexts/userContext';

const theme = createTheme({
    palette: {
        type: 'light',
        background: {
            default: "#ffffff",
            paper: '#e0e0e0'
        },
        primary: {
            main: '#b71c1c',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.palette.background.paper};
    color: ${props => props.theme.palette.text.primary};
`;
const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const AdminPage = () => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const logout = () => {
        localStorage.removeItem("user");
        setUser(undefined);
    };
    if (!user)
    {
        window.location.href = "/login";
        return <>Redirecionando...</>;
    }

    api.defaults.headers['auth'] = user.access_token;
    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider value={{user, logout}}>
                <Container>
                    <Header onMenuClick={()=>setSidebarOpened(true)}/>
                    <Content>
                        <Sidebar opened={sidebarOpened} setOpened={setSidebarOpened}/>
                        <Outlet/>
                    </Content>
                </Container>
            </UserContext.Provider>
        </ThemeProvider>
    )
}
export {theme};
export default AdminPage;