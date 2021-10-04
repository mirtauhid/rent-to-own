import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';
import baseURL from '../../../Helpers/httpRequest';

const SubPropertyEdit = () => {
    const [propertyData, setPropertyData] = useState({})

useEffect(()=>{
    axios({
        method: "GET",
        url:`${baseURL}/v2/properties/3`
    })
    .then((res)=>{
        console.log(res.data);
        setPropertyData({...res.data.data,images:["a"]})
    })

},[])

const handleDeleteImg = (index) => {
    console.log("Here the code")
}
    return (
        <div className="container mx-auto px-4">
            <div className="mx-4">
                <div className="p-6">
                    <h2 className="uppercase text-center text-2xl font-bold my-5">preview you listing before submiting</h2>
                    <div className="w-full flex flex-wrap">
                        <h2 className="w-full text-xl font-bold mb-5">Images</h2>
                        {
                            propertyData?.images?.map((photo, index) => {
                                return (
                                    <div key={photo} className="md:w-1/2 text-secondary text-sm font-bold mb-2 p-2 ">
                                        <div className="border-2 relative border-dashed overflow-hidden rounded-lg h-80 md:h-60 lg:h-80">
                                            <img src={photo} className="w-full" style={{ height: "fit-content" }} />
                                            <button
                                                onClick={() => handleDeleteImg(index)}
                                                className="absolute top-0 right-0 rounded w-10 h-10 bg-gray-200 flex justify-center items-center text-xl">
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="md:w-1/2 block text-secondary text-sm font-bold mb-2 p-2">
                            <label className="cursor-pointer" htmlFor="upload">
                                <div className="flex justify-center items-center flex-col  h-80 md:h-60 lg:h-80 w-full border-2 border-dashed rounded-lg">
                                    <FaCloudUploadAlt className="text-7xl" />
                                    <p className="px-6 text-sm">Choose an image</p>
                                    <p className="px-6 text-sm">JPG, PNG, GIF, Max</p>
                                    <p className="px-6 text-sm">10 MB</p>
                                </div>
                                <input
                                    className="hidden"
                                    id="upload"
                                    type="file"
                                    placeholder="Please enter your upload here..."
                                    name="upload"
                                    accept="image/*"
                                    // onChange={handleFileUpload}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="my-5 shadow border border-gray-100 rounded p-4">
                        <h2 className="text-xl font-bold mb-5">Description</h2>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">The name of your home listing:</h3>
                            <p>{propertyData?.name}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Describe your home:</h3>
                            <p>{propertyData?.description}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Home Type:</h3>
                            <p>{propertyData?.listingTypeId}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Number of Beds:</h3>
                            <p>{propertyData?.bedroom}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Number of Baths:</h3>
                            <p>{propertyData?.bathroom}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Number of Partial Baths:</h3>
                            <p>{propertyData?.partialBathroom}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Approximate Square Footage:</h3>
                            <p>{propertyData?.squareFootage}</p>
                        </div>
                    </div>

                    <div className="my-5 shadow border border-gray-100 rounded p-4">
                        <h2 className="text-xl font-bold mb-5">Location</h2>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Address:</h3>
                            <p>{propertyData?.address}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-md font-bold">Apartment, suit, building, flat no. etc:</h3>
                            <p>{propertyData?.aptNo}</p>
                        </div>
                    </div>


                    <div className="my-5 shadow border border-gray-100 rounded p-4">
                        <h2 className="text-xl font-bold mb-5">Fair market value</h2>
                        <div className="mb-3">
                            <p>${propertyData?.price}</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-between mb-2 p-2">
                        <button
                            type="button"
                            onClick={() => setSteps({ ...steps, fourth: false })}
                            className="text-primary border-2 border-primary rounded py-2 px-12">Back</button>
                        <button
                            type="submit"
                            className=" bg-green-400 text-white rounded py-2 px-12"
                            // onClick={formik.handleSubmit}
                            >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubPropertyEdit;