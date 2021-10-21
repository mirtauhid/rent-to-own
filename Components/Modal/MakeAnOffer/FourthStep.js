import Link from 'next/link';
import React from 'react';

const FourthStep = ({ steps, setSteps }) => {
    return (
        <div className="px-5 pb-5">
            <h2 className="text-primary font-medium text-center text-2xl xl:text-3xl mx-12 md:mx-24">We are close, You're
                almost done</h2>

            <div className="w-full text-center my-8">
                <img src="/images/checked.svg" alt="Deal" className={'w-16 block mx-auto'} />
            </div>

            <div className="text-center px-8">
                <h3 className="my-6 text-xl font-bold">Your offer is now ready for review.</h3>
                <p className="my-6 font-medium">Please take a look to ensure things are correct, and submit to seller when you’re ready.</p>
                <Link href="/offerPreview">
                    <a className=" bg-green-400 text-white rounded py-2 px-6 mb-12">View Offer</a>
                </Link>
            </div>
        </div>
    );
};

export default FourthStep;