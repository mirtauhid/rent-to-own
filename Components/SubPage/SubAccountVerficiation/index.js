import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PageLoading from '../../PageLoading';
import ExpiredStatus from './ExpiredStatus';
import FailedStatus from './FailedStatus';
import ResendVerification from './ResendVerification';
import SuccessStatus from './SuccessStatus';

const SubAccountVerification = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleLoading = setTimeout(() => setLoading(false), 600)
        return () => clearTimeout(handleLoading)
    }, [])

    const router = useRouter()
    const status = router?.query?.status;
    let statusCard = <FailedStatus />;

    if (status === "success") {
        statusCard = <SuccessStatus />
    } else if (status === "expired") {
        statusCard = <ExpiredStatus />
    }
    return (
        <>
            {
                loading
                    ? <div className="my-16">
                        <PageLoading />
                    </div>
                    : (
                        router?.query?.resend === "verification-link"
                            ? <ResendVerification />
                            : <div className="container px-4 mx-auto p-5 md:p-16 relative w-full __main ">
                                <div className="flex justify-center items-center">
                                    <div className="grid justify-items-center w-96 rounded shadow bg-white">
                                        {statusCard}
                                    </div>
                                </div>
                            </div>
                    )
            }
        </>
    );
};

export default SubAccountVerification;