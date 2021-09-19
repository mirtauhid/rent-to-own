import React from 'react'

const index = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div>
                    <h1 className="text-primary text-2xl font-medium">$3,805</h1>
                    <p className="text-xs text-gray-500">per month</p>
                </div>
                <div className="ml-4">
                    <div className="bg-primary hover:bg-green-500 px-2 w-32 h-6 rounded-xl flex items-center justify-center cursor-pointer">
                        <p className="text-xs font-bold text-white scale-90">Verified Account</p>
                    </div>
                    <h1 className="text-3xl mt-4">Cambium Place 1bed​/​1bath Unit</h1>
                    <div className="mt-3 flex flex-row">
                        <p className="text-xs text-gray-500">Apartment</p>
                        <p className="text-xs text-gray-500 ml-4">Hosted by Chiara</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-gray-400 font-bold pt-6 ">About this home</h1>
                <p className="text-sm font-open-sans text-gray-900 pt-5">
                    Newly constructed and uniquely designed luxury apartment complex located in Missoula​,​ MT. Urban living at it's finest with the perfect blend of high-end interiors and access to Montana's wide-open sensibility. Available for both short and long-term leases. Pricing of $3805​/​month reflects bookings for 1 month or shorter. For leases 2-12 months​,​ discounted pricing down to $2660​/​month is offered. Utility fee may apply.
                </p>
                <a className="cursor-pointer text-xs text-primary pt-3">See more</a>
            </div>
        </div>
    )
}

export default index
