import React from 'react'

const index = ({title, host, price}) => {
    return (
        <div>
            <div className="w-72 px-4">
                <img src="https://picsum.photos/200/300" alt="" className="h-40 w-full object-center object-cover rounded" />
                <div className="flex flex-row pt-3">
                    <div className="flex-1"> 
                        <h1 className="text-sm flex-1 text-primary">${price}</h1>
                        <h1 className="text-xs flex-auto text-gray-400 pt-1">per month</h1>
                    </div>
                    <div>
                        <p className="text-sm justify-self-end">{title}</p>
                        <p className="text-xs text-gray-400 pt-1">{host}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
