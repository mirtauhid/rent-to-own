import React from 'react'

const Images = ({src,height}) => {
    return (
        <div className={`${height} w-full`}>
            <img src={src} alt="" className="h-full w-full object-cover"/>
        </div>
    )
}

export default Images
