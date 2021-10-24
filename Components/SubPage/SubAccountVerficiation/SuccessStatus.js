import Link from 'next/dist/client/link';
import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const SuccessStatus = () => {
    return (
        <>
            <div className="h-24 md:h-32 pt-10 rounded-lg border-black grid md:justify-items-center place-items-center">
                <IoMdCheckmarkCircle fill="#00dbb1" className="h-14 w-14 md:w-24 md:h-24 self-center" />
            </div>
            <div className="grid justify-items-center mt-6">
                <strong className="text-3xl">Success </strong>
                <p className="text-lg py-2">Now, your email is verified!</p>
            </div>
            <div className="pt-8 pb-5">
                <Link href="/">
                    <a className="bg-primary rounded-full text-white py-2 px-5" >Go Back to Home</a>
                </Link>
            </div>
        </>
    );
};

export default SuccessStatus;