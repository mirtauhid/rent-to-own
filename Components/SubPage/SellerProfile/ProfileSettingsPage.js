import Link from 'next/link';
import React from 'react';
import SellerProfilePages from '.';
import EditAddress from './EditAddress';
import EditProfileData from './EditProfileData';

const ProfileSettingsPage = () => {
    return (
        <SellerProfilePages activeUrl="profileSettings">
            <div className="px-6 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold capitalize">profile settings</h2>
                    <Link href="/sellerProfile/yourListings">
                        <a className={"inline-block rounded-lg py-2 px-5 border-2 border-primary text-primary font-medium"}>Edit Settings</a>
                    </Link>
                </div>
                <EditProfileData/>
                <EditAddress/>
            </div>
        </SellerProfilePages>
    );
};

export default ProfileSettingsPage;