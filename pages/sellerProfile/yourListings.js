import React from 'react';
import UsersOnly from '../../Components/ProtectedRoutes/UsersOnly';
import YourListingsPage from '../../Components/SubPage/SellerProfile/YourListingsPage';
import HomeLayout from '../../Layouts/HomeLayout';

const YourListings = () => {
    return (
        <HomeLayout>
            <UsersOnly type="SELLER">
                <YourListingsPage />
            </UsersOnly>
        </HomeLayout>
    );
};

export default YourListings;