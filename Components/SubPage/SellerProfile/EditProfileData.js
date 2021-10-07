import axios from 'axios';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { BsCardImage } from 'react-icons/bs';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import baseURL from '../../../Helpers/httpRequest';
import { onSelectFile } from '../../../Helpers/imageHandlers';

const EditProfileData = () => {
    const [photo, setPhoto] = useState(null)
    const [userProfileData, setUserProfileData] = useState({
        image:'',
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        phoneNumber:''
    })

    const { userData } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userData) {
            const {image,firstName,lastName,gender, dob,phoneNumber} = userData;
            setUserProfileData({image,firstName,lastName,gender, dob,phoneNumber});
            image?.secure_url && setPhoto(image?.secure_url)
        }
        
    }, [userData])

    const handleFileUpload = (e) => {
        onSelectFile(e)
            .then(data => {
                const { base64, file } = data;
                setPhoto(base64)
                formik.setFieldValue("image",base64)
            })
    }
    const validate = values => {
        const errors = {};

        if (!values.firstName) { errors.firstName = 'Required' }
        if (!values.lastName) { errors.lastName = 'Required' }
        if (!values.gender) { errors.gender = 'Required' }
        if (!values.dob) { errors.dob = 'Required' }

        return errors;
    };

    const formik = useFormik({
        initialValues: userProfileData,
        enableReinitialize: true,
        validate,
        onSubmit: values => {
            const modifiedData = {...values};
            if (values?.image?.secure_url) {
                delete modifiedData.image
            }
            
            axios({
                method: "PUT",
                url: `${baseURL}/v2/auth/update-profile`,
                data:modifiedData,
                headers: { 
                    Authorization: localStorage.getItem('authToken'),
                }
            })
            .then((res)=>console.log(res.data))
            .catch((err)=>console.log(err.response))
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="lg:w-2/3">
            <h3 className="text-xl my-4 font-medium">Your profile picture</h3>
            <div className="flex w-full">
                <div className=" w-40 text-secondary text-sm font-bold mb-2">
                    <label className="cursor-pointer" htmlFor="upload">
                        {
                            photo ?
                                <div className="relative h-40 w-40 overflow-hidden rounded-lg border-2 border-dashed rounded-lg">
                                    <BsCardImage className="absolute inline-block text-4xl bg-white rounded px-1 bottom-0 right-0" />
                                    <img src={photo} className="w-full" style={{ height: "fit-content" }} alt="" />
                                </div>
                                :
                                <div className="flex justify-center items-center flex-col w-40 h-40 border-2 border-dashed rounded-lg text-center">
                                    <FaCloudUploadAlt className="text-3xl" />
                                    <p className="px-2 text-sm">Choose an image</p>
                                    <p className="px-2 text-sm">JPG, PNG, GIF</p>
                                </div>
                        }
                        <input
                            className="hidden"
                            type="file"
                            placeholder="Please enter your upload here..."
                            name="upload"
                            id="upload"
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                    </label>
                </div>
                <div className="px-6">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-sm">Member since September 5, 2021</p>
                </div>
            </div>
            <h3 className="my-5 text-md text-gray-500 font-medium">Tip: Choose an image where your face is recognizable.</h3>

            <div className="w-full flex flex-wrap">
                <label className="w-full mx-2 font-medium">Your name</label>
                <div className="w-1/2 mb-2 p-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.firstName && formik.errors.firstName &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.firstName}</div>
                    }
                </div>
                <div className="w-1/2 mb-2 p-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.lastName && formik.errors.lastName &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.lastName}</div>
                    }
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-1/2 mb-2 p-2">
                    <label className="w-full mx-2 font-medium">Gender</label>
                    <select
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="gender"
                        value={formik?.values?.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">Select a gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                    {
                        formik.touched.gender && formik.errors.gender &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.gender}</div>
                    }
                </div>
                <div className="w-1/2 mb-2 p-2">
                    <label className="w-full mx-2 font-medium">Date of Birth</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 h-9 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="DOB"
                        name="dob"
                        value={moment(formik.values.dob).format("YYYY-MM-DD")}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.dob && formik.errors.dob &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.dob}</div>
                    }
                </div>
            </div>
            <div className="w-full mb-2 py-2">
                <label className="w-full font-medium">Your phone number</label>
                <input
                    className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="8"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.phoneNumber && formik.errors.phoneNumber &&
                    <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.phoneNumber}</div>
                }
            </div>

            <div className="my-4 mx-2">
                <button onClick={formik.handleSubmit} type="submit" className="py-2 px-6 bg-primary text-white rounded">Update Profile Data</button>
            </div>
        </form>
    );
};

export default EditProfileData;