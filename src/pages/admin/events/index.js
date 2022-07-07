import { Button } from "@mui/material";
import Content from "../components/content";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import api from "../../../services/api";

const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
      field: 'name',
      headerName: 'Nome',
      width: 250,
      editable: true,
    },
    {
      field: 'local',
      headerName: 'Local',
      width: 160,
      valueGetter: (params) =>
        `${params.row.Local.name}`,
    },
];
const StyledGridToolbarContainer = styled(GridToolbarContainer)`
    display: flex;
    justify-content: space-between;
`;
const StyledDataGrid = styled(DataGrid)`
    height: 400px;
`;
const CustomToolbar = () => {
    let navigate = useNavigate();
    return (
        <StyledGridToolbarContainer>
            <GridToolbarFilterButton />
            <Button 
                startIcon={<AddIcon />} 
                variant="contained"
                onClick={() => navigate("/admin/eventos/novo")}
            >
                Novo Evento
            </Button>
        </StyledGridToolbarContainer>
    );
}

const EventsPage = () => {
    let [events, setEvents] = useState([]);

    const requestEvents = async () => {
        const events = await api.get("/events");
        setEvents(events.data);
    };
    useEffect(() => {
        requestEvents();
    }, []);

    return (
        <Content title="Eventos" navButtons={[{text: "Dashboard", href:"/admin"}, {text: "Eventos"}]}>
            <StyledDataGrid
                rows={events}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                components={{
                  Toolbar: CustomToolbar,
                }}
            />
        </Content>
    )
}
export default EventsPage;