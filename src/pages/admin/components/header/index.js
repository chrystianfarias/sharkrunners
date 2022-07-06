import { AppBar, Toolbar, IconButton, Menu, MenuItem, Tooltip, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import {useContext, useState} from 'react';
import UserContext from '../../contexts/userContext';

const MenuButton = styled.div`
    display: block;
    @media only screen and (min-width: 600px) {
        display: none;
    }
`;
const Header = ({onMenuClick}) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const {logout, user} = useContext(UserContext);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLogout = () => {
      logout();
      handleCloseUserMenu();
    };
    
    return <AppBar position="static">
        <Toolbar>
            <MenuButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={onMenuClick}
              >
                <MenuIcon />
              </IconButton>
            </MenuButton>
            Shark Runners - Dashboard
            <span style={{width: '100%'}}/>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: "#ff0000" }}>N</Avatar>
              </IconButton>
            </Tooltip>
        </Toolbar>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key="logout" onClick={handleLogout}>
            Sair
          </MenuItem>
        </Menu>
      </AppBar>
}
export default Header;