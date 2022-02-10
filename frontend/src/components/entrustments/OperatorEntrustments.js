import React, { useContext, useEffect, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import authContext from '../../context/authContext';
import axios from '../../axios';

export const OperatorEntrustments = () => {

    const context = useContext(authContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (context) {
            axios.post('entrustments', null, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${context?.token}`
                }
            }).then(res => setData(res.data));
        }
    }, [data, setData, context]);

    return (
        <div>
            {data?.entrustments.map((x, i) => (<p key={i}>{x.lecturerId}</p>))}
        </div>
    );
}

export default withAuthenticationRequired(OperatorEntrustments);