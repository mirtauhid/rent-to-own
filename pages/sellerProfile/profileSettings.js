import React from 'react';
import ProfileSettingsPage from '../../Components/SubPage/SellerProfile/ProfileSettingsPage';
import HomeLayout from '../../Layouts/HomeLayout';

const profileSettings = () => {
    return (
        <HomeLayout>
            <ProfileSettingsPage/>
        </HomeLayout>
    );
};

export default profileSettings;