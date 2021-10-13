import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const index = ({ description }) => {
    const [showLongText, setShowLongText] = useState(false)
    // const description = "Hello guyes!"
    const isLongText = description.length > 450;
    const descriptionSlice = description.slice(0, 450);
    return (
        <div>
            <p className="text-sm font-open-sans text-gray-900 mt-3">
                {
                    !isLongText
                        ? description
                        : <div className="overflow-hidden">
                            {showLongText ? description : descriptionSlice}
                            {
                                showLongText
                                    ? <div>
                                        <button
                                            onClick={() => setShowLongText(false)}
                                            className="w-full bg-white font-bold pt-1 rounded text-center">
                                            <IoIosArrowUp className="w-full text-xl" />
                                            Show Less
                                        </button>
                                    </div>
                                    : <div className="-mt-2" style={{ boxShadow: "0 0 15px #555" }}>
                                        <button
                                            onClick={() => setShowLongText(true)}
                                            className="w-full bg-white font-bold pt-1 rounded text-center">
                                            Show More
                                            <IoIosArrowDown className="w-full text-xl" />
                                        </button>
                                    </div>
                            }
                        </div>
                }
            </p>
        </div>
    )
}

export default index
