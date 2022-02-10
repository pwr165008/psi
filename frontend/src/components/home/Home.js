import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuBox from './MenuBox';
import MenuSkeleton from './MenuSkeleton';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import roleMenus from "./role-menus.json";

export const Home = () => {
    const { user } = useAuth0();
    const roles = user && user['https://psi.empinet.pl/roles'];

    return (
        <div>
            <h1>Main menu</h1>
            <Stack
                divider={<Divider />}
                spacing={2}
            >
                {roles ? roles.map(role => (
                    <MenuBox key={role} itemNames={roleMenus[role]} userRole={role} />
                )) :
                <MenuSkeleton />}
            </Stack>
        </div>
    );
}

export default withAuthenticationRequired(Home);