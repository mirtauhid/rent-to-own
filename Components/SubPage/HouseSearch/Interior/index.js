import React from 'react'

const index = () => {
    return (
        <div>
            <h1 className="text-xl text-gray-400 font-bold">Interior features</h1>
            <div className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                
                <div className="">
                    <p className="text-md">Range</p>
                    <p className="text-md py-4">Wood cook stove</p>
                    
                </div>
                <div className="">
                    <p className="text-md">Deep soaker tub</p>
                    <p className="text-md py-4">Open upper floor loft</p>
                    
                </div>
                <div className="">
                    <p className="text-md">Propane range</p>
                    <p className="text-md py-4">custom log finishes</p>
                </div>
            </div>
            <hr className="mt-5"></hr>
            {/* Exterior features */}
            <h1 className="text-xl text-gray-400 font-bold">Exterior features</h1>
            <div className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                
                <div className="pr-2">
                    <p className="text-md">Deck or patio</p>
                    <p className="text-md py-4">Workshop</p>
                    <p className="text-md">Agricultural tools & equipment</p>
                </div>
                <div className="pt-4 md:pt-0 pr-2">
                    <p className="text-md">Sprinkler system</p>
                    <p className="text-md py-4">Open upper floor loft</p>
                    <p className="text-md">Custom log finishes</p>
                </div>
                <div className="pt-4 md:pt-0">
                    <p className="text-md">Agricultural tools</p>
                    <p className="text-md py-4">Large garden area</p>
                    <p className="text-md">Livestock shelter & fenced area</p>
                </div>
            </div>
            <hr className="mt-5"></hr>
        </div>
    )
}

export default index
