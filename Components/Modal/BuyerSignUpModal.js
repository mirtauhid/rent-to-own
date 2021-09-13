import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEnvelope, FaTimes } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import CustomModal from './CustomModal';

const BuyerSignUpModal = ({ isOpen }) => {
    const [steps, setSteps] = useState({ first: false, second: false, third: false });
    const [isClose, setIsClose] = useState(!isOpen);
    const [isLogin, setIsLogin] = useState(false)

    return (
        <CustomModal
            isOpen={!isClose}
            customClasses={
                steps.first && steps.second
                    ? "rounded-lg px-6 py-3 m-auto bg-white w-3/4 md:w-2/3 lg:w-2/5 xl:1/3 border-b-8 border-green-500"
                    : "rounded m-auto bg-white w-3/4 md:w-2/3 lg:w-5/7 xl:2/3"
            }>

            {/* For first & second steps only */}
            {
                !steps.second &&
                <CommonPart
                    steps={steps}
                    setSteps={setSteps}
                    setIsClose={setIsClose}
                    isLogin={isLogin}
                    setIsLogin={setIsLogin} />
            }

            {/* For third step */}
            {
                !isLogin && steps.first && steps.second &&
                <ThirdStep setIsClose={setIsClose} />
            }
        </CustomModal>
    );
};

export default BuyerSignUpModal;


const CommonPart = ({ steps, setSteps, setIsClose, isLogin, setIsLogin }) => {
    return (
        <div className="md:flex">
            <div className="hidden lg:block lg:w-1/2 relative">
                <img src="/images/NoPath.png" alt="logo" className={'h-full'} />
                <div className="absolute top-0 left-0 p-12 text-center">
                    <h2 className="text-primary font-medium lg:text-2xl xl:text-4xl">Welcome, your dashboard is waiting</h2>
                    <p className="mt-5 lg:text-sm xl:text-lg">Buying and selling privately has never been easier, see for yourself.</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                {/* For cross button  */}
                <div className="text-right p-4">
                    <button
                        className="p-2 rounded hover:bg-gray-200 text-2xl"
                        onClick={() => setIsClose(true)}>
                        <FaTimes />
                    </button>
                </div>
                {/* For switching form */}
                <div className="px-20">
                    <div className="flex px-5">
                        <button
                        onClick={()=>setIsLogin(false)}
                            className={"w-1/2 border-b-4 text-xl font-medium pb-1 " + (!isLogin ? "border-primary" : "border-white")}>Join</button>
                        <button
                        onClick={()=>setIsLogin(true)}
                            className={"w-1/2 border-b-4 text-xl font-medium pb-1 " + (isLogin ? "border-primary" : "border-white")}>Log In</button>
                    </div>
                </div>

                {/* This is the first step of signup  */}
                {
                    !isLogin && !steps.first &&
                    <FirstStep steps={steps} setSteps={setSteps} />
                }

                {/* This is the second step of signup  */}
                {
                    !isLogin && steps.first && !steps.second &&
                    <SecondStep steps={steps} setSteps={setSteps} />
                }

                {/* This is for Login  */}
                {
                    isLogin && 
                    <LogIn/>
                }
            </div>
        </div>
    );
};


const FirstStep = ({ steps, setSteps }) => {
    return (
        <>
            <div className="p-16 lg:p-12 xl:px-16 xl:py-24">
                <Link href="#">
                    <a className="block py-4 xl:py-5 text-center text-white bg-red-500 rounded-full mb-4">
                        <TiSocialGooglePlus className="inline text-2xl" style={{ fill: 'white' }} /> Join with Gmail
                    </a>
                </Link>
                <button
                    onClick={() => setSteps({ ...steps, first: true })}
                    className="block w-full py-4 xl:py-5 text-center text-white bg-secondary rounded-full  mb-4">
                    <FaEnvelope className="inline text-xl mr-2" style={{ fill: 'white' }} /> Join with Gmail
                </button>
                <p className="lg:mt-10 xl:mt-16 text-sm text-center">
                    By continuing, I agree to the Rent-to-own Realty’s
                    <Link href="#">
                        <a className="inline-block mx-2 text-primary">Terms of service</a>
                    </Link> and
                    <Link href="#">
                        <a className="inline-block mx-2 text-primary">Privacy Policy</a>
                    </Link>
                </p>
            </div>
        </>
    );
};

const SecondStep = ({ steps, setSteps }) => {
    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.firstName) {
            errors.firstName = 'First name required';
        }

        if (!values.lastName) {
            errors.lastName = 'Last name required';
        }

        if (!values.password) {
            errors.password = 'Password required';
        }

        if (!values.phone) {
            errors.phone = 'Phone required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: 'abc@gmail.com',
            firstName: 'Habibullah',
            lastName: 'Bahar',
            password: '12345678',
            phone: '01784144444',
        },
        validate,
        onSubmit: values => {
            setSteps({ ...steps, second: true })
        },
    });
    return (
        <>
            <h2 className="capitalize text-center text-primary font-medium text-2xl my-4">Create account</h2>
            <div className="text-center">
                Or Join with
                <Link href="#">
                    <a className="inline-block mx-2 text-primary">Facebook</a>
                </Link>or
                <Link href="#">
                    <a className="inline-block mx-2 text-primary">Google</a>
                </Link>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className="p-6">
                {/* For Signup Form */}
                <div className="flex">
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
                            <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.firstName}</div>
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
                            <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.lastName}</div>
                        }
                    </div>
                </div>

                <div className="w-full mb-2 p-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email && formik.errors.email &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.email}</div>
                    }
                </div>

                <div className="w-full mb-2 p-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.password && formik.errors.password &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.password}</div>
                    }
                </div>

                <div className="w-full mb-2 p-2">
                    <div className="relative shadow border rounded h-10 py-2 px-3 text-gray-700 leading-tight overflow-hidden">
                        <span class="absolute top-0 left-0 text-center inline-block h-full bg-gray-200 p-2">+1</span>
                        <input
                            className="absolute block left-10 w-full appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {
                        formik.touched.phone && formik.errors.phone &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.phone}</div>
                    }
                </div>

                <div className="w-full mb-2 p-2">
                    <button type="submit" className="w-full bg-green-400 text-white rounded py-2">Sign up</button>
                </div>

                <div className="w-full mb-2 p-2 text-center">
                    <p>Already have an account? <span className="text-green-400 font-bold">Login</span>
                    </p>
                </div>
            </form>
        </>
    );
};

const ThirdStep = ({ setIsClose }) => {
    return (
        <div className="">
            {/* For cross button  */}
            <div className="text-right p-4">
                <button
                    className="p-2 rounded hover:bg-gray-200 text-2xl"
                    onClick={() => setIsClose(true)}>
                    <FaTimes />
                </button>
            </div>
            <div className="px-6 mb-6 text-center">
                <FaEnvelope className="inline-block text-7xl" style={{ fill: '#00dbb1' }} />
                <h2 className="text-2xl xl:text-3xl font-medium px-5 py-3">Joe, check your inbox to verify your email</h2>
                <p className="text-lg mb-3">
                    Thanks for signing up! There's one quick step left. To be able to contact you, we need you to verify your email address. Please click the link we sent to <b>joe9000@gmail.com</b>.
                </p>
                <div className="w-full mb-2 p-2 text-left">
                    <p className="font-bold">Didn't get the email?  <span className="text-green-400 font-bold">Resend it.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const LogIn = () => {
    return (
        <div>
            Sign in
        </div>
    );
};