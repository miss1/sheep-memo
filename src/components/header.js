import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory, useLocation } from "react-router-dom";
import '../assets/header.css'
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {pink} from "@mui/material/colors";

const pages = [
  {value: '/home', label: 'HOME'},
  {value: '/special', label: 'SPECIAL DAY'},
  {value: '/plan', label: 'PLAN'},
  {value: '/recipes', label: 'RECIPES'}
];

function Header() {
  let history = useHistory();
  let location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [tabVal, setTabVal] = useState('/home');

  useEffect(() => {
    if (location.pathname.indexOf('plan-detail') !== -1) {
      setTabVal('/plan');
    } else {
      setTabVal(location.pathname);
    }
  }, [setTabVal, location]);

  const handleChange = (event, newValue) => {
    history.push({pathname: newValue});
  };

  const handleClickItem = (newValue) => {
    handleCloseNavMenu();
    history.push({pathname: newValue});
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="header">
      <Box sx={{ justifyContent: 'space-between', maxWidth: 900, width: '100%', display: { xs: 'none', md: 'flex' } }}>
        <p className="header-title">Y&C</p>
        <Tabs value={tabVal} onChange={handleChange} aria-label="nav tabs example">
          {pages.map((page) => (
            <Tab key={page.value} value={page.value} label={page.label}/>
          ))}
        </Tabs>
      </Box>
      <Box sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', display: { xs: 'flex', md: 'none' } }}>
        <FavoriteIcon sx={{ color: pink[500], fontSize: 30 }}/>
        <p className="header-title">Y&C</p>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}>
          {pages.map((page) => (
            <MenuItem key={page.value} onClick={() => handleClickItem(page.value)}>{page.label}</MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
}

export default Header;
