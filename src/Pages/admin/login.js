import styled from 'styled-components';
import logo from '../main/assets/logo_black.png';
import {Box, TextField, Button, Alert, AlertTitle} from '@mui/material';
import api from '../../services/api';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import {theme} from './index';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.palette.background.paper};
    color: ${props => props.theme.palette.text.primary};
`;
const Card = styled.div`
    width: 300px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    border-radius: 5px;
    background: ${props => props.theme.palette.background.default};
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    img {
        max-width: 50%;
        opacity: .5;
    }
`;

const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setError(false);

        api.post("/login",{
                number: data.get('phone'),
                password: data.get('password'),
            })
        .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/admin");
        })
        .catch((err) => {
            console.log(err);
            setError(true);
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Card>
                    <img alt="logo" src={logo}/>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Número"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {error ? <Alert severity="error">
                            <AlertTitle>Erro</AlertTitle>
                            Número não é de um administrador e/ou senha inválida!
                        </Alert> : <></>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                        Logar
                        </Button>
                    </Box>
                </Card>
            </Container>
        </ThemeProvider>
    )
}
export default LoginPage;