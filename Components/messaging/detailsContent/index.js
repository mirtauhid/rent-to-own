import React from 'react'

const index = () => {
    return (
        <div className="">
            <h1 className="text-md font-bold">Details</h1>
            <div className="border mt-6"></div>
            <div className="overflow-y-auto">
                <div className="flex mt-2 ml-4">
                    <h1 className="text-md text-gray-500 font-semibold">Overview</h1>
                    <button className={"flex justify-center items-center ml-4 rounded-3xl bg-primary px-4"}>
                        <p className="text-xs text-white">Veified Account</p>
                    </button>
                </div>
                <div className="flex items-center ml-4 mt-4">
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                    />
                    <h1 className="ml-4">Tim Hover</h1>
                </div>
                <hr className="mt-4"></hr>
                <div className="flex">
                    <img className="h-32 w-32 rounded-md ml-2 mt-2" src="https://picsum.photos/200" />
                    <div className="ml-2 mt-2">
                        <h1 >Cambium Place 1bed/ 1bath Unit</h1>
                        <ul className="list-disc ml-6 mt-2">
                            <li className="text-xs cursor-pointer underline  text-gray-400">Toronto, Canada</li>
                        </ul>
                        <p className="text-primary mt-2 ml-2">$3,805</p>
                    </div>
                </div>
                <hr className="mt-8"></hr>
                <div>
                    <h1 className="font-semibold text-md mt-4 ml-2">About this home</h1>
                    <h1 className="ml-2 mt-4">Capacity</h1>
                    <ul className="flex flex-wrap list-disc ml-6 mt-2 gap-x-6 gap-y-2">
                        <li className="text-sm text-gray-600">2,345ft2</li>
                        <li className="text-sm text-gray-600">2 bedrooms</li>
                        <li className="text-sm text-gray-600">2 beds</li>
                        <li className="text-sm text-gray-600">2 baths</li>
                    </ul>
                </div>
                <hr className="mt-8"></hr>
                <div>
                    <h1 className="font-semibold text-md mt-4 ml-2">Location</h1>
                    <h1 className="ml-2 mt-4">Toronto, Canada</h1>
                </div>
            </div>
        </div>
    )
}

export default index
