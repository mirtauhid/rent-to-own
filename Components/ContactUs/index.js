import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
    const validate = (values) => {
        const errors = {};

        if (!values.name) { errors.name = "Name is required!"; }

        if (!values.email) { errors.email = "Email is required"; }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { errors.email = "Invalid email address"; }

        if (!values.phone) { errors.phone = "Phone is required!"; }
        if (!values.message) { errors.message = "Message is required!"; }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div className="px-5 md:px-20 lg:px-28 mt-10">
            <div className="relative rounded-xl h-60 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/flag.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute flex justify-center items-center top-0 left-0 w-full h-full px-5 md:px-12"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                >
                    <div className="text-center  mx-12 lg:mx-24 lx:mx-48 z-0">
                        <h1 className="font-bold text-xl sm:text-2xl smd:text-3xl md:text-4xl lg:text-5xl text-white mb-3 ">Contact us</h1>
                        <p className="font-medium text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-wrap -mt-10 md:-mt-16 mx-auto mb-20 bg-white w-5/6 shadow border border-gray-100">
                <div className="w-full lg:w-1/2">
                    <div className="m-8">
                        <h2 className="text-xl font-bold text-center mb-6">Get In Touch With Us</h2>

                        <form onSubmit={formik.handleSubmit} >
                            <div className="w-full mb-2 p-2">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-md text-red-500 mt-2 ml-1">
                                        {formik.errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="w-full mb-2 p-2">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Email address"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-md text-red-500 mt-2 ml-1">
                                        {formik.errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="w-full mb-2 p-2">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Phone number"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <div className="text-md text-red-500 mt-2 ml-1">
                                        {formik.errors.phone}
                                    </div>
                                )}
                            </div>

                            <div className="w-full mb-2 p-2">
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline resize-none"
                                    type="text"
                                    placeholder="Message"
                                    name="phone"
                                    rows="5"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <div className="text-md text-red-500 mt-2 ml-1">
                                        {formik.errors.phone}
                                    </div>
                                )}
                            </div>

                            <div className="w-full mb-2 p-2">
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white rounded py-2"
                                >SEND MESSAGE NOW</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="m-8">
                        <h2 className="text-xl font-bold text-center mb-6">Our Contact Info</h2>
                        <div className="flex flex-wrap">
                            <div className="w-10"><BiMap className="text-3xl" fill={"#00dbb1"} /></div>
                            <div className="text-md mb-6">
                                <p>854 Ben hendyr Street,</p>
                                <p>Toronto , Canada</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-10"><BiEnvelope className="text-3xl" fill={"#00dbb1"} /></div>
                            <div className="text-md mb-6">
                                <p>Support@yourdomain.com</p>
                                <p>Info@yourdomain.com</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-10"><BiPhone className="text-3xl" fill={"#00dbb1"} /></div>
                            <div className="text-md mb-6">
                                <p>+(00) 852 852 9633</p>
                                <p>+(00) 852 852 9644</p>
                            </div>
                        </div>

                        <div className="flex">
                            <Link href="#">
                                <a className="flex justify-center items-center w-10 h-10 bg-primary rounded-full mx-2"><FaFacebookF className="text-xl" fill={"#fff"} /></a>
                            </Link>
                            <Link href="#">
                                <a className="flex justify-center items-center w-10 h-10 bg-primary rounded-full mx-2"><FaTwitter className="text-xl" fill={"#fff"} /></a>
                            </Link>
                            <Link href="#">
                                <a className="flex justify-center items-center w-10 h-10 bg-primary rounded-full mx-2"><FaLinkedinIn className="text-xl" fill={"#fff"} /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;