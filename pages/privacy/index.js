import React from 'react';
import HomeLayout from "../../Layouts/HomeLayout";

const index = () => {
    return (
        <HomeLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="my-6">
                    <div className="md:flex justify-between items-center">
                        <h2 className="text-3xl font-bold mb-4">Terms of use</h2>
                        <p className="text-sm font-medium mb-4">Last updated on March 25, 2021</p>
                    </div>
                    <hr />
                </div>
        </div>
        </HomeLayout>
    );
};

export default index;