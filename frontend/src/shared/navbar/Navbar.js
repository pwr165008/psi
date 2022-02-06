import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitch from "../switch/LanguageSwitch";
import { useTranslation } from 'react-i18next';
export const Navbar = () => {
 
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         <div sx={{display: 'flex', flexDirection: 'row'}}> 
          <LanguageSwitch  />
          <Button color="inherit">{t("login")}</Button></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;