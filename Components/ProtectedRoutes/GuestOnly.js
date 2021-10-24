import React from 'react';
import { useSelector } from 'react-redux';
import Notfound from './Notfound';

const GuestOnly = ({children}) => {
    const { isLoggedIn, userData } = useSelector(state => state.auth)
    return (!isLoggedIn ? children : <Notfound/>);
};

export default GuestOnly;