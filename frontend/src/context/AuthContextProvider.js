import React, { useEffect, useState } from 'react';
import axios from 'axios';
import authContext from './authContext';
import authConfig from "../auth/auth-config.json";
import { useAuth0 } from '@auth0/auth0-react';

export const AuthContextProvider = ({ children }) => {
    const { getAccessTokenWithPopup, getAccessTokenSilently } = useAuth0();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getToken = async (callback) => await callback({
            audience: authConfig.audience,
            scope: authConfig.scope
        });

        const setUserData = (token) => {
            console.log(token);

            const config = {
                headers: {
                    Authorization: `bearer ${token}`
                }
            }
            axios.get(authConfig.userDataUrl, config)
                .then(res => setData(res.data));
        }
        
        getToken(getAccessTokenSilently).then(token => {
            setUserData(token);
        }).catch(() => {
            getToken(getAccessTokenWithPopup).then(token => {
                setUserData(token);
            });
        });
    }, [getAccessTokenSilently, getAccessTokenWithPopup])

    const { Provider } = authContext;
    return (
        <Provider value={data}>
            {children}
        </Provider>
    );
}

export default AuthContextProvider;