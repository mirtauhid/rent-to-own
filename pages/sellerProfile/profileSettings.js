import React from 'react';
import UsersOnly from '../../Components/ProtectedRoutes/UsersOnly';
import ProfileSettingsPage from '../../Components/SubPage/SellerProfile/ProfileSettingsPage';
import HomeLayout from '../../Layouts/HomeLayout';

const profileSettings = () => {
    return (
        <HomeLayout>
            <UsersOnly type="SELLER">
                <ProfileSettingsPage />
            </UsersOnly>
        </HomeLayout>
    );
};

export default profileSettings;