import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MenuBox = ({ itemNames, userRole }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route);
    }

    return <div>
        <h2>{t(userRole)}</h2>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                '& > :not(style)': {
                    m: 1,
                    width: 256,
                    height: 128,
                },
            }}
        >
            {itemNames && itemNames.map(itemName => (
                <MenuItem onClick={() => handleClick(itemName)} key={itemName} elevation={3}>{t(itemName)}</MenuItem>
            ))}
        </Box>
    </div>
}

export default MenuBox;