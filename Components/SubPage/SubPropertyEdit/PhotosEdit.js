import axios from 'axios';
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';
import baseURL from '../../../Helpers/httpRequest';
import { onSelectFile } from '../../../Helpers/imageHandlers';
import PopUpAlert from '../../PopUpAlert/PopUpAlert';

const PhotosEdit = ({ propertyid, propertyImages, setPropertyImages }) => {
    const [popUpData, setPopUpData] = useState({ type: "success", message: "", delay: 0 })

    const handleUpdateImages = () => {
        axios({
            method: "GET",
            url: `${baseURL}/v2/properties/${propertyid}/images`
        })
            .then(res => setPropertyImages(res.data?.data))
            .catch((err) => console.log(err))
    }

    const handleFileUpload = (e) => {
        setPopUpData({ type: "success", message: "Uploading image...", delay: 10000, visible: true })
        onSelectFile(e)
            .then(data => {
                const { base64, file } = data;
                axios({
                    method: "POST",
                    url: `${baseURL}/v2/properties/${propertyid}/images`,
                    data: { 'images': [base64] }
                })
                    .then(res => {
                        // Updating image array
                        handleUpdateImages()
                        setPopUpData({ type: "success", message: "Image uploaded!", delay: 2000, visible: true })
                    })
                    .catch((err) => {
                        // Updating image array
                        handleUpdateImages()
                        setPopUpData({ type: "failed", message: "Image upload failed!", delay: 2000, visible: true })
                        console.log(err)
                    })
            })
    }
    const handleDeleteImg = (photoId) => {
        setPopUpData({ type: "failed", message: "Deleting image...", delay: 10000, visible: true })
        axios({
            method: "DELETE",
            url: `${baseURL}/v2/properties/${propertyid}/images/${photoId}`
        })
            .then(res => {
                // Updating image array
                handleUpdateImages()
                setPopUpData({ type: "success", message: "Image deleted!", delay: 2000, visible: true })
            })
            .catch((err) => {
                // Updating image array
                handleUpdateImages()
                setPopUpData({ type: "failed", message: "Image delete failed!", delay: 2000, visible: true })
                console.log(err)
            })
    }
    return (

        <div className="lg:w-3/4 xl:w-3/5 mx-auto  my-5 shadow border border-gray-100 rounded p-4">
            {<PopUpAlert key={new Date().toLocaleTimeString()} popUpData={popUpData} setPopUpData={setPopUpData} />}
            <div className="md:flex md:flex-wrap w-full mb-2 p-2">
                {
                    propertyImages?.map((photo) => {
                        const photoId = photo?.id;
                        const photoSrc = photo?.src?.secure_url;
                        return (
                            <div key={photoId + (Math.random() * 100).toString()} className="md:w-1/2 text-secondary text-sm font-bold mb-2 p-2 ">
                                <div className="border-2 relative border-dashed overflow-hidden rounded-lg h-80 md:h-60 lg:h-80">
                                    <img src={photoSrc} className="w-full" style={{ height: "fit-content" }} />
                                    <button
                                        onClick={() => handleDeleteImg(photoId)}
                                        className="absolute top-0 right-0 rounded w-10 h-10 bg-gray-200 flex justify-center items-center text-xl">
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="md:w-1/2 block text-secondary text-sm font-bold mb-2 p-2">
                    <label className="cursor-pointer" htmlFor="upload" >
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
                            onChange={handleFileUpload}
                        />
                    </label>
                </div>
            </div>
            {/* {
            formik.errors?.images &&
            <div className="text-md text-red-500 mt-2 ml-1">{formik.errors?.images}</div>
        } */}

            <p className="my-5 text-sm ml-2 mb-8">Tip: Choose the top 8-10 photos of your home from different angles in good light that really show the space.</p>

        </div>
    );
};

export default PhotosEdit;
