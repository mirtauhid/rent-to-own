import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';

const index = () => {
    return (
        <HomeLayout>
            <div className="text-center font-medium my-16 mx-8 ">
                <h2 className="text-4xl text-primary">Thank You!</h2>
                <p className="text-2xl mt-5  text-primary">One of our Representative  will be calling you within 24 Hours</p>
            </div>
        </HomeLayout>
    );
};

export default index;