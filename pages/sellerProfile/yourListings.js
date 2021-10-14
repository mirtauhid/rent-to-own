import React, { useEffect } from 'react';
import YourListingsPage from '../../Components/SubPage/SellerProfile/YourListingsPage';
import HomeLayout from '../../Layouts/HomeLayout';

const YourListings = () => {
    

    return (
        <HomeLayout>
            <YourListingsPage />
        </HomeLayout>
    );
};

export default YourListings;