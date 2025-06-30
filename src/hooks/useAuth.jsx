import React, { useContext } from 'react';
import AuthContext from '../contextProvider/AuthContext';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;