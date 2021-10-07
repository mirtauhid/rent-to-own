import React from 'react'

const index = ({description}) => {
    const descriptionSlice = description.slice(0, 500) + (description.length > 500 ? "..." : "")
    return (
        <div>
            <p className="text-sm font-open-sans text-gray-900 mt-3">
                {descriptionSlice}
            </p>
        </div>
    )
}

export default index
