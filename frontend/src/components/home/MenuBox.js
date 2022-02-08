import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem';

export const MenuBox = ({ itemNames, userRole }) => {
    return <div>
        <h2>{userRole}</h2>
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
            {itemNames.map(itemName => (
                <MenuItem key={itemName} elevation={3}>{itemName}</MenuItem>
            ))}
        </Box>
    </div>
}

export default MenuBox;