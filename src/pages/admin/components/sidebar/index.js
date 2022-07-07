import { Fragment } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styled from 'styled-components';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

const FixedSidebar = styled.div`
    background: ${props => props.theme.palette.background.default};
    display: none;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    @media only screen and (min-width: 600px) {
        display: flex;
    }
    transition: all ease-out .5s;
`;
const Items = () => {
    let navigate = useNavigate();
    return (
        <Box sx={{ minWidth: 250, bgcolor: 'background.default' }}>
            <List component="nav">
                <ListItemButton onClick={() => navigate("/admin")}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/admin/eventos")}>
                    <ListItemIcon>
                        <EventIcon />
                    </ListItemIcon>
                    <ListItemText primary="Eventos" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/admin/notificar")}>
                    <ListItemIcon>
                        <NotificationsActiveIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notificar" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/admin/checkin")}>
                    <ListItemIcon>
                        <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Fazer check-in" />
                </ListItemButton>
            </List>
        </Box>
    )
}
const Sidebar = ({opened, setOpened}) => {
    return (
        <>
            <Fragment>
                <SwipeableDrawer
                        anchor='left'
                        open={opened}
                        onClose={() => setOpened(false)}
                        onOpen={() => setOpened(true)}
                    >
                    <Items/>
                </SwipeableDrawer>
            </Fragment>
            <FixedSidebar>
                <Items/>
            </FixedSidebar>
        </>
    )
}
export default Sidebar;