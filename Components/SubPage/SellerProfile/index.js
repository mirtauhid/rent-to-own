import Link from 'next/link';
import React from 'react';

const SellerProfilePages = ({activeUrl, children }) => {
    return(
        <div className="container mx-auto py-7">
            <div className="md:flex">
                <div className="md:w-1/4 px-3 py-8">
                    <Link href="/sellerProfile/yourListings">
                        <a className={"block mb-4 font-bold " + (activeUrl === 'yourListings' && 'text-primary' )}>Your listing</a>
                    </Link>
                    <Link href="/sellerProfile/profileSettings">
                        <a className={"block mb-4 font-bold " + (activeUrl === 'profileSettings' && 'text-primary' )}>Profile Settings</a>
                    </Link>
                    <Link href="/sellerProfile/accountSettings">
                        <a className={"block mb-4 font-bold " + (activeUrl === 'accountSettings' && 'text-primary' )}>Account Settings</a>
                    </Link>
                </div>
                <div className="md:w-3/4 shadow-md border border-gray-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SellerProfilePages;