import React from 'react'

const index = () => {
    return (
        <div>
            <div className="mt-5">
                <h1 className="text-xl text-gray-400 font-bold">Interior features</h1>
                <div className="mt-4 flex justify-between">
                    <p className="text-md">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                </div>
                <div className="mt-4 flex justify-between">
                    <p className="text-md">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                </div>
            </div>
            <hr className="mt-5"></hr>
            {/* Exterior features */}
            <div className="mt-5">
                <h1 className="text-xl text-gray-400 font-bold">Exterior features</h1>
                <div className="mt-4 flex justify-between">
                    <p className="text-md">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                </div>
                <div className="mt-4 flex justify-between">
                    <p className="text-md">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                    <p className="text-md ml-4">Entire home</p>
                </div>
            </div>
            <hr className="mt-5"></hr>
        </div>
    )
}

export default index
