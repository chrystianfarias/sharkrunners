import { AppBar, Toolbar, IconButton, ButtonBase, Menu, MenuItem, Tooltip, Avatar} from '@mui/material';
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
const ProfileButton = styled.div`
  border-radius: 5px;
  overflow: hidden;
  min-width: 120px;
  height: 100%;
  button {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 15px;
    gap: 10px;
    transition: background ease .2s;
  }
  &:hover {
    button {
      background: rgba(255,255,255,.1);
    }
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
            <Tooltip title="Abrir configurações">
              <ProfileButton>
                <ButtonBase onClick={handleOpenUserMenu}>
                    <Avatar sx={{ bgcolor: "#9b59b6" }}>
                      {user.member.name.charAt(0).toUpperCase()}
                    </Avatar>
                    {user.member.name}
                </ButtonBase>
              </ProfileButton>
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