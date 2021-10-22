import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PageLoading from '../PageLoading';
import Notfound from './Notfound';

const UsersOnly = ({ children, type }) => {
    const [loading, setLoading] = useState(true)
    const { isLoggedIn, userData } = useSelector(state => state.auth)
    const timer = userData ? 500 : 1500;

    useEffect(() => {
        const handleLoading = setTimeout(() => setLoading(false), timer)
        return () => clearTimeout(handleLoading)
    }, [])

    // Functionalities for what I will return 
    if (loading) {
        return (
            <div className="my-16">
                <PageLoading />
            </div>
        )
    } else {
        if (isLoggedIn) {
            if (type) {
                return (type?.toUpperCase() === userData.type ? children : <Notfound />)
            } else {
                return children
            }
        } else {
            return <Notfound />
        }
    }

};

export default UsersOnly;