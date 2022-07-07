import Content from "../components/content";
import { TextField, Button, MenuItem, Divider, InputAdornment, Input} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useState } from "react";
import date from 'date-and-time';
import styled from 'styled-components';
import api from "../../../services/api";
import axios from "axios";
import Chat from "../components/chat";
import Map from "../components/map";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 20px;
    
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`;
const FormContainer = styled.div`
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
const PreviewContainer = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    flex: 1;
    .leaflet-container {
        width: 100%;
        height: 100vh;
    }
`;
const FormRow = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: flex-start;
`;

const NewEventPage = () => {
    const [locals, setLocals] = useState([]);
    const [message, setMessage] = useState("Novo Evento!");
    const [newPlace, setNewPlace] = useState(null);

    const [newEvent, setNewEvent] = useState({
        name: undefined,
        date: new Date(),
        local: 0,
        price: undefined
    });

    const getLocals = async () => {
        const locals = await api.get("/locals");
        setLocals(locals.data);
    };

    const saveLocal = async () => {
        const res = await api.post("/locals", {
            name: newPlace.name,
            latitude: newPlace.lat,
            longitude: newPlace.lon,
            random: true
        });
        getLocals();
        setNewEvent({...newEvent, local: res.data.id})
        setNewPlace(undefined);
    };

    useEffect(() => {
        getLocals();
    }, []);

    const handleFile = async (event) => {
        const imgurForm = new FormData();
        imgurForm.append('media', event.target.files[0]);
        imgurForm.append('key', '00001c2ffdc0681fb952d88a0e95cc49');
        
        const result = await axios.post(
            'https://thumbsnap.com/api/upload',
            imgurForm,
            {
                headers: {
                    Authorization: `Client-ID f1abf5f143ec1d7`,
                },
            }
        );
        console.log(result);
    }


    const handleChangeEvent = (prop) => (event) => {
        setNewEvent({...newEvent, [prop]: event.target.value});
    }

    const formatMessage = () => {
        let nameStr = "";
        let dateStr = "📆 Sem data confirmada";
        let localStr = "";
        let priceStr = "";
        const local = locals.find(l => l.id === newEvent.local);
        if (newEvent.name)
        {
            nameStr = `${newEvent.name}\n`;
        }
        if (newEvent.date)
        {
            dateStr = `\n📆 ${date.format(newEvent.date,'DD/MM/YYYY')}`
            dateStr += `\n🕑 ${date.format(newEvent.date,'HH:mm')}`
        }
        if (local)
        {
            localStr = `\n📌 ${local.name}`;
        }
        if (newEvent.price)
        {
            priceStr = `\n💵 R$ ${newEvent.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
        }
        setMessage(`${nameStr}${dateStr}${localStr}${priceStr}`);
    }
    useEffect(formatMessage, [newEvent]);

    const handleLocalDropDown = (event) => {
        const {value} = event.target;
        if (value === "random")
        {
            const random = Math.floor(Math.random() * locals.length);
            setNewEvent({...newEvent, local: locals[random].id});
            return;
        }
        if (value === "new")
        {
            setNewPlace({name: undefined, lat: -28.4845, lon:-49.0098});
        }
        else
        {
            setNewPlace(null);
        }
        setNewEvent({...newEvent, local: value});
    };
    const handleCalendar = (value) => {
        setNewEvent({...newEvent, date: value});
    }
    return (
        <Content title="Novo Evento" navButtons={[{text: "Dashboard", href:"/admin"}, {text: "Eventos", href:"/admin/eventos"}, {text: "Novo Evento"}]}>
            <Container>
                    <FormContainer>
                        <FormRow>
                            <TextField
                                required
                                fullWidth
                                label="Nome do evento"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={newEvent.name}
                                onChange={handleChangeEvent("name")}
                            />
                        </FormRow>
                        <FormRow>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    label="Data"
                                    name="date"
                                    value={newEvent.date}
                                    onChange={handleCalendar}
                                    renderInput={(params) => <TextField {...params} fullWidth/>}
                                />
                            </LocalizationProvider>
                        </FormRow>
                        <FormRow>
                            <TextField
                                id="outlined-select-currency"
                                select
                                required
                                fullWidth
                                value={newEvent.local}
                                label="Local"
                                name="local"
                                onChange={handleLocalDropDown}
                                helperText="Por favor selecione um local"
                            >
                                <MenuItem key="random" value="random">
                                    Aleatório
                                </MenuItem>
                                <MenuItem key="new" value="new">
                                    Novo local
                                </MenuItem>
                                <Divider/>
                                {locals.map(local => 
                                <MenuItem key={"local" + local.id} value={local.id}>
                                    {local.name}
                                </MenuItem>)}
                            </TextField>
                        </FormRow>
                        {newPlace != null
                        ?<FormRow>
                            <TextField
                                required
                                helperText="Selecione no mapa a localização"
                                label="Nome do local"
                                name="localName"
                                value={newPlace.name}
                                onChange={(e) => setNewPlace({...newPlace, name: e.target.value})}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={newPlace.name === undefined}
                                onClick={saveLocal}
                            >
                            Salvar Local
                            </Button>
                        </FormRow>:<></>}
                        <FormRow>
                            <TextField
                                fullWidth
                                id="price"
                                label="Valor do ingresso"
                                name="price"
                                type="number"
                                helperText="Deixe vazio se for gratuíto"
                                value={newEvent.price}
                                onChange={handleChangeEvent("price")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                }}
                            />
                        </FormRow>
                        <FormRow>
                            Arte do evento
                            <Input accept="image/*" onChange={handleFile} multiple type="file" /> 
                        </FormRow>
                        <FormRow>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                            Criar
                            </Button>
                        </FormRow>
                    </FormContainer>
                    <PreviewContainer>
                        {newPlace != null
                        ?<Map 
                            lat={newPlace.lat}
                            lon={newPlace.lon}
                            onClick={(lat, lon) => setNewPlace({...newPlace, lat, lon})}/>
                        :<Chat
                            messages={[
                                {
                                    text: message,
                                    hour: date.format(new Date(),'HH:mm')
                                }
                            ]}/>}
                    </PreviewContainer>
                </Container>
        </Content>
    )
}
export default NewEventPage;