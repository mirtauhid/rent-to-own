import React from 'react'

const index = () => {
    return (
        <div className="mt-5">
            <h1 className="text-xl text-gray-400 font-bold">Capacity</h1>
            <div className="mt-3 flex flex-row font-medium">
                <p className="text-xs ">2,345 ft</p>
                <p className="text-xs ml-4">2 bedroom</p>
                <p className="text-xs ml-4">2 bedroom</p>
                <p className="text-xs ml-4">2 bedroom</p>
            </div>
            <div className="mt-4 flex flex-row">
                <img src="/svgs/propertySearch/1330.svg" className="w-6 scale-75"/>
                <div>
                    <p className="text-xs font-semibold ml-4">Entire home</p>
                    <p className="text-xs ml-4 mt-1">You’ll have the house to yourself.</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <img src="/svgs/propertySearch/clean.svg" className="scale-75"/>
                <div>
                    <p className="text-xs font-semibold ml-4">Entire home</p>
                    <p className="text-xs ml-4 mt-1">You’ll have the house to yourself.</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <img src="/svgs/propertySearch/house.svg" className="scale-75"/>
                <div>
                    <p className="text-xs font-semibold ml-4">Entire home</p>
                    <p className="text-xs ml-4 mt-1">You’ll have the house to yourself.</p>
                </div>
            </div>
        </div>
    )
}

export default index
