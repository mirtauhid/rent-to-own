import React from 'react'

const index = () => {
    return (
        <div className="w-52">
            <img src="https://picsum.photos/200" alt="" className="h-40 w-60" />
            <div className="flex flex-row pt-3">
                <div className="flex-1">
                    <h1 className="text-sm flex-1 text-green-600">$4999</h1>
                    <h1 className="text-xs flex-auto text-gray-400 pt-1">per month</h1>
                </div>
                <div>
                    <p className="text-sm justify-self-end">Title is much more...</p>
                    <p className="text-xs text-gray-400 pt-1">Hosted by Charles E.</p>
                </div>
            </div>
        </div>
    )
}

export default index
