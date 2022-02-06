import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitch from "../switch/LanguageSwitch";
import { useTranslation } from 'react-i18next';
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { t } = useTranslation();

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

          <Grid sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
            <LanguageSwitch />

            { isAuthenticated ? 
            <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>{t("logout")}</Button> :
            <Button color="inherit" onClick={loginWithRedirect}>{t("login")}</Button>
            }

          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;