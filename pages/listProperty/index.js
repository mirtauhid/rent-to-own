import React from 'react';
import { useSelector } from 'react-redux';
import ListPropertyPages from '../../Components/SubPage/ListPropertyPages';
import HomeLayout from '../../Layouts/HomeLayout';

const ListProperties = () => {
    const {isLoggedIn} = useSelector((state) => state.auth);
    return (
        <HomeLayout>
            <ListPropertyPages />
        </HomeLayout>
    );
};

export default ListProperties;