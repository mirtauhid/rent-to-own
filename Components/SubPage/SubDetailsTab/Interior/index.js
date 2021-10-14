import React from 'react';

const index = ({ property, showVertically }) => {
    return (
        <>
            {
                showVertically
                    ? <ul className="pl-6 py-3 list-disc">
                        {property?.map(item => (
                            item.Feature.interior === true ? <li key={item.Feature?.id} className="text-md">{item.Feature?.name}</li> : null
                        ))}
                    </ul>
                    : <div className="gap-8 flex flex-wrap py-5">
                        {property?.map(item => (
                            item.Feature.interior === true ? <p  key={item.Feature?.id} className="text-md">{item.Feature?.name}</p> : null
                        ))}
                    </div>
            }
        </>
    )
}

export default index
