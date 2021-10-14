import React, { useEffect } from 'react';
import YourListingsPage from '../../Components/SubPage/SellerProfile/YourListingsPage';
import HomeLayout from '../../Layouts/HomeLayout';

const YourListings = () => {
    useEffect(() => {
        const handleTest = () => {
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
                var s1 = document?.createElement("script");
                var s0 = document?.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/6167c082f7c0440a591e1c5f/1fhukg0ft';
                s1.charset = 'UTF - 8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode?.insertBefore(s1, s0);
            })();
        }
        document && handleTest()

    }, [])

    return (
        <HomeLayout>
            <YourListingsPage />
        </HomeLayout>
    );
};

export default YourListings;