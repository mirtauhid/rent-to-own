import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout';
import { TiDeleteOutline } from "react-icons/ti";

const CardImage = ({item}) => {
    return (
        <HomeLayout>
            <div className="h-screen container px-4 mx-auto p-5 md:p-16 relative w-full __main ">
                <div className="flex justify-center items-center">
                    <div className="grid justify-items-center w-96 rounded shadow bg-white">
                        <div className="h-24 md:h-32 pt-10 rounded-lg border-black grid md:justify-items-center place-items-center">
                            <TiDeleteOutline fill="	#FF0000" className="h-14 w-14 md:w-24 md:h-24 self-center"/>
                        </div>
                        <div className="grid justify-items-center mt-6">
                            <strong className="text-3xl">Failed </strong>
                            <p className="text-lg text-red-500 py-2">Payment failed</p>
                        </div>
                        <div className="pt-8 pb-5">
                            <button
                                type="submit"
                                className="bg-primary rounded-full text-white py-2 px-5"
                            >Go Back to Listing</button>
                        </div>
                    </div>
                </div>
            </div>
      </HomeLayout>
    )
}

export default CardImage;