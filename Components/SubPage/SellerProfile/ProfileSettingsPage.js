import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCardImage } from "react-icons/bs";
import { FaCloudUploadAlt } from 'react-icons/fa';
import SellerProfilePages from '.';
import { onSelectFile } from '../../../Helpers/imageHandlers';
import EditAddress from './EditAddress';

const ProfileSettingsPage = () => {
    const [photo, setPhoto] = useState(null)
    const [file, setFile] = useState(null)

    const handleFileUpload = (e) => {
        onSelectFile(e)
            .then(data => {
                const { base64, file } = data;
                console.log(data);
                setPhoto(base64)
                setFile(file)
            })
    }
    const validate = values => {
        const errors = {};

        // if (!values.upload) { errors.upload = 'Required' }
        if (!values.firstName) { errors.firstName = 'Required' }
        if (!values.lastName) { errors.lastName = 'Required' }
        if (!values.gender) { errors.gender = 'Required' }
        if (!values.dob) { errors.dob = 'Required' }
        if (!values.bio) { errors.bio = 'Required' }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            upload: '',
            firstName: '',
            lastName: '',
            gender: '',
            dob: '',
            bio: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values))
        },
    });
    return (
        <SellerProfilePages activeUrl="profileSettings">
            <div className="px-6 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold capitalize">profile settings</h2>
                    <Link href="/sellerProfile/yourListings">
                        <a className={"inline-block rounded-lg py-2 px-5 border-2 border-primary text-primary font-medium"}>Edit Settings</a>
                    </Link>
                </div>
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">Select a gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
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
                                value={formik.values.dob}
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
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.phone && formik.errors.phone &&
                            <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.phone}</div>
                        }
                    </div>
                    <div className="w-full mb-2 p-2">
                        <label className="w-full mx-2 font-medium">Your portfolio bio</label>
                        <textarea
                            className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="8"
                            placeholder="Tell us something about yourself..."
                            name="bio"
                            value={formik.values.bio}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </textarea>
                        {
                            formik.touched.bio && formik.errors.bio &&
                            <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.bio}</div>
                        }
                    </div>

                    <div className="my-4 mx-2">
                        <button onClick={formik.handleSubmit} type="submit" className="py-2 px-6 bg-primary text-white rounded">Save Changes</button>
                    </div>
                </form>
                <EditAddress/>
            </div>
        </SellerProfilePages>
    );
};

export default ProfileSettingsPage;