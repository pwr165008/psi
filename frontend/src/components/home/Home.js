import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuBox from './MenuBox';
import authContext from '../../context/authContext';
import MenuSkeleton from './MenuSkeleton';
import { withAuthenticationRequired } from '@auth0/auth0-react';

export const Home = () => {
    const userData = useContext(authContext);
    const roles = userData && userData['https://psi.empinet.pl/roles'];

    return (
        <div>
            <h1>Main menu</h1>
            <Stack
                divider={<Divider />}
                spacing={2}
            >
                {roles ? roles.map(role => (
                    <MenuBox key={role} itemNames={['Entrustments', 'Preferences']} userRole={role} />
                )) :
                <MenuSkeleton />}
            </Stack>
        </div>
    );
}

export default withAuthenticationRequired(Home);