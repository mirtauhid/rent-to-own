import axios from 'axios';
import React from 'react';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from '../../../Helpers/httpRequest';

const PhotosEdit = ({ propertyid, propertyImages, setPropertyImages }) => {

    const handleUpdateImages = () => {
        axios({
            method: "GET",
            url: `${baseURL}/v2/properties/${propertyid}/images`
        })
            .then(res => setPropertyImages(res.data?.data))
            .catch((err) => setPropertyImages([]))
    }

    const handleFileUpload = (e) => {
        // For toast
        toast.warning("Image uploading!", {
            theme: "colored",
            autoClose: 5000,
        });

        const formData = new FormData();
        formData.append("images", e.target?.files[0]);
        axios({
            method: "POST",
            url: `${baseURL}/v3/properties/${propertyid}/images`,
            data: formData,
            headers: {
                Authorization: localStorage.getItem("authToken"),
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                // For toast
                toast.success("Image uploaded!", {
                    theme: "colored",
                    autoClose: 5000,
                });
                // Updating image array
                handleUpdateImages()
            })
            .catch((err) => {
                // For toast
                toast.error("Image upload failed!", {
                    theme: "colored",
                    autoClose: 5000,
                });
                // Updating image array
                handleUpdateImages()
            })
    }
    const handleDeleteImg = (photoId) => {
        if (propertyImages.length > 1) {
            // For toast
            toast.warning("Your request processing!", {
                theme: "colored",
                autoClose: 5000,
            });
            axios({
                method: "DELETE",
                url: `${baseURL}/v3/properties/${propertyid}/images/${photoId}`,
                headers: { Authorization: localStorage.getItem("authToken") }
            })
                .then(res => {
                    // For toast
                    toast.success("Image deleted!", {
                        theme: "colored",
                        autoClose: 5000,
                    });
                    // Updating image array
                    handleUpdateImages()
                })
                .catch((err) => {
                    // For toast
                    toast.error("Image deleting failed!", {
                        theme: "colored",
                        autoClose: 5000,
                    });
                    // Updating image array
                    handleUpdateImages()
                })
        } else {
            // For toast
            toast.error("There is only one image in the property. You can not delete it!", {
                theme: "colored",
                autoClose: 7000,
            });
        }
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                limit={2}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <div className="lg:w-3/4 xl:w-3/5 mx-auto  my-5 shadow border border-gray-100 rounded p-4">
                <div className="md:flex md:flex-wrap w-full mb-2 p-2">
                    {
                        propertyImages?.map((photo) => {
                            const photoId = photo?.id;
                            const photoSrc = photo?.src?.secure_url;
                            return (
                                <div key={photoId + (Math.random() * 100).toString()} className="md:w-1/2 text-secondary text-sm font-bold mb-2 p-2 ">
                                    <div className="border-2 relative border-dashed overflow-hidden rounded-lg h-80 md:h-60 lg:h-80">
                                        <img src={photoSrc} className="w-full h-full object-cover" />
                                        <div
                                            onClick={() => handleDeleteImg(photoId)}
                                            className="absolute top-0 right-0 cursor-pointer rounded w-10 h-10 bg-gray-200 flex justify-center items-center text-xl">
                                            <FaTimes />
                                        </div>
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
        </>
    );
};

export default PhotosEdit;
