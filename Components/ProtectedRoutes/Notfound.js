import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const Notfound = () => {
    return (
        <div className="container px-4 mx-auto p-5 md:p-16 w-full ">
            <div className="flex justify-center items-center">
                <div className="grid p-4 text-center justify-items-center w-96 rounded shadow bg-white">
                    <div className="h-24 md:h-24 pt-3 rounded-lg border-black grid md:justify-items-center place-items-center">
                        <TiDeleteOutline fill="	#FF0000" className="h-14 w-14 md:w-24 md:h-24 self-center" />
                    </div>
                    <div className="grid justify-items-center mt-6">
                        <strong className="text-3xl">Page not found </strong>
                        <p className="text-lg text-red-500 py-2">Page not found or you are not allowed to view the page!</p>
                    </div>
                    <div className="py-5">
                        <a href="/" className="bg-primary rounded-full text-white py-2 px-5" >Go Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;