import React, { useEffect, useState } from 'react';
import authContext from './authContext';
import authConfig from "../auth/auth-config.json";
import { useAuth0 } from '@auth0/auth0-react';

export const AuthContextProvider = ({ children }) => {
    const { getAccessTokenWithPopup, getAccessTokenSilently } = useAuth0();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async (callback) => await callback({
            audience: authConfig.audience,
            scope: authConfig.scope
        });

        getToken(getAccessTokenSilently).then(token => {
            setToken(token);
        }).catch(() => {
            getToken(getAccessTokenWithPopup).then(token => {
                setToken(token);
            });
        });
    }, [getAccessTokenSilently, getAccessTokenWithPopup])

    const { Provider } = authContext;
    return (
        <Provider value={token}>
            {children}
        </Provider>
    );
}

export default AuthContextProvider;