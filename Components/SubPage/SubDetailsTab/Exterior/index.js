import React from 'react'

const index = ({property}) => {
    return (
        <div className="gap-8 flex flex-wrap py-5">
                {property?.map(item => (
                    item.Feature.interior === false ? <div>
                        <p className="text-md">{item.Feature?.name}</p>
                    </div> : null
                ))}
        </div>
    )
}

export default index
