import React from 'react'

const Account = ({tab}) => {
    return <div className={`border-2 mt-10 absolute w-full transition duration-500 ${tab === "account"? "transform translate-x-0": "transform -translate-x-full"}`}>hello from Account</div>;
}

export default Account
