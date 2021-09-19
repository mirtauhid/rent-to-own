import React from 'react';
import AccountSettingsPage from '../../Components/SubPage/SellerProfile/AccountSettingsPage';
import HomeLayout from '../../Layouts/HomeLayout';

const accountSettings = () => {
    return (
        <HomeLayout>
            <AccountSettingsPage/>
        </HomeLayout>
    );
};

export default accountSettings;