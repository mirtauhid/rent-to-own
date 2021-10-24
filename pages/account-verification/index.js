import { useRouter } from 'next/router';
import React from 'react';
import SubAccountVerification from '../../Components/SubPage/SubAccountVerficiation';
import HomeLayout from '../../Layouts/HomeLayout';

const AccountVerification = () => {
    const router = useRouter();
    return (
        <HomeLayout>
            <SubAccountVerification/>
        </HomeLayout>
    );
};

export default AccountVerification;