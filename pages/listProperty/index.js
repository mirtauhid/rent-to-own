import React from 'react';
import { useSelector } from 'react-redux';
import UsersOnly from '../../Components/ProtectedRoutes/UsersOnly';
import ListPropertyPages from '../../Components/SubPage/ListPropertyPages';
import HomeLayout from '../../Layouts/HomeLayout';

const ListProperties = () => {
    const {isLoggedIn} = useSelector((state) => state.auth);
    return (
        <HomeLayout>
            <UsersOnly type="SELLER">
            <ListPropertyPages />
            </UsersOnly>
        </HomeLayout>
    );
};

export default ListProperties;