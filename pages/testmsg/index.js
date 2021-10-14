import React from 'react';
import { useRouter } from "next/router";

const Test = () => {
    const router = useRouter()
    const {
        query,
    } = router
    console.log('====================================');
    console.log(query);
    console.log('====================================');
    return (
        <div>
            
        </div>
    )
}

export default Test;
