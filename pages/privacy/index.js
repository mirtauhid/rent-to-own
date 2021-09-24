import React from 'react';
import HomeLayout from "../../Layouts/HomeLayout";

const index = () => {
    return (
        <HomeLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="my-6">
                    <div className="md:flex justify-between items-center">
                        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
                        <p className="text-sm font-medium mb-4">Last updated on March 25, 2021</p>
                    </div>
                    <hr />
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-medium mb-4">Matters of Copyright</h2>
                    <p className="mb-5">The initial term of the Lease is generally one year, and the Lease automatically renews every year as long as the resident is in compliance with the Lease and Right to Purchase Agreement. Each year, the resident has the right to give notice that he/she does not want to renew the Lease for another year. If for any reason the resident decides to leave the home at the end of a Lease term and is in compliance with the Lease, the full security deposit will be returned.</p>

                    <p className="mb-5">The resident's financial commitment is limited to the initial term of the Lease. The resident does not have to renew the Lease after the initial term. The maximum number of years of the Lease is five in most states and three in Texas.</p>

                    <p className="mb-5">Over the life of the Lease, subject to applicable laws, Home Partners expects residents to treat the home as their own, maintain the lawn and garden, remove snow or debris, and complete minor repairs.</p>
                </div>
            </div>
        </HomeLayout>
    );
};

export default index;