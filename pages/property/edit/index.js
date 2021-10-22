import React from 'react';
import UsersOnly from '../../../Components/ProtectedRoutes/UsersOnly';
import SubPropertyEdit from '../../../Components/SubPage/SubPropertyEdit';
import HomeLayout from '../../../Layouts/HomeLayout';

const index = () => {
    return (
        <HomeLayout>
            <UsersOnly type="SELLER">
                <SubPropertyEdit />
            </UsersOnly>
        </HomeLayout>
    );
};

export default index;