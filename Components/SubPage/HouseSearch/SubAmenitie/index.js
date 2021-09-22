import React from 'react'

const index = () => {
    return (
        <div className="mt-5 font-semibold">
            <h1 className="text-xl text-gray-400 font-bold">Amenitie</h1>
            <div className="mt-4 flex flex-row">
                <div className="flex flex-row">
                    <img src="/svgs/propertySearch/wifi.svg" />
                    <p className="text-xs  ml-4 w-full">Wifi</p>
                </div>
                <div className=" ml-20 flex flex-row">
                    <img src="/svgs/propertySearch/yard.svg" />
                    <p className="text-xs ml-4 w-full">Backyard</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <div className="flex flex-row">
                    <img src="/svgs/propertySearch/swimming-pool.svg" />
                    <p className="text-xs ml-4 w-full">Pool</p>
                </div>
                <div className=" ml-20 flex flex-row">
                    <img src="/svgs/propertySearch/kitchen.svg" />
                    <p className="text-xs ml-4 w-full">Kitchen</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <div className="flex flex-row">
                    <img src="/svgs/propertySearch/washer.svg" />
                    <p className="text-xs ml-4 w-full">Washer</p>
                </div>
                <div className=" ml-14 flex flex-row">
                    <img src="/svgs/propertySearch/outline.svg" />
                    <p className="text-xs ml-4 w-full">Air conditioning</p>
                </div>
            </div>
        </div>
    )
}

export default index
