import React from 'react';
import UsersOnly from '../../Components/ProtectedRoutes/UsersOnly';
import AccountSettingsPage from '../../Components/SubPage/SellerProfile/AccountSettingsPage';
import HomeLayout from '../../Layouts/HomeLayout';

const accountSettings = () => {
    return (
        <HomeLayout>
            <UsersOnly type="SELLER">
            <AccountSettingsPage/>
            </UsersOnly>
        </HomeLayout>
    );
};

export default accountSettings;