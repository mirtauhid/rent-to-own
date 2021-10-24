import Link from 'next/dist/client/link';
import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const ExpiredStatus = () => {
    return (
        <>
            <div className="h-24 md:h-32 pt-10 rounded-lg border-black grid md:justify-items-center place-items-center">
                <TiDeleteOutline fill="	#FF0000" className="h-14 w-14 md:w-24 md:h-24 self-center" />
            </div>
            <div className="grid justify-items-center mt-6">
                <strong className="text-3xl">Expired Link </strong>
                <p className="text-lg text-red-500 py-2">Your verification link is expired. <button>Resend link</button>. </p>
            </div>
            <div className="pt-8 pb-5">
                <Link href="/">
                    <a className="bg-primary rounded-full text-white py-2 px-5" >Go Back to Home</a>
                </Link>
            </div>
        </>
    );
};

export default ExpiredStatus;