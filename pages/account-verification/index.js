import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';

const AccountVerification = () => {
    const router = useRouter();
    return (
        <HomeLayout>
            {
                router?.query?.status === "success"
                    ? <div className="mx-5 md:mx-20 lg:mx-28  my-24 text-center">
                        <div className="w-full text-center my-8">
                            <img src="/images/checked.svg" alt="Deal" className={'w-16 block mx-auto'} />
                        </div>
                        <h2 className="text-2xl font-bold mb-10">Now, your email is verified!</h2>
                        <Link href="/">
                            <a className="bg-primary text-white py-2 px-4 text-lg rounded">Go to home</a>
                        </Link>
                    </div>
                    : <div className="mx-5 md:mx-20 lg:mx-28  my-24 text-center">
                        <div className="w-full text-center my-8">
                            <img src="/images/cross.png" alt="Deal" className={'w-16 block mx-auto'} />
                        </div>
                        <h2 className="text-2xl font-bold mb-10">Invalid link!</h2>
                    </div>
            }
        </HomeLayout>
    );
};

export default AccountVerification;