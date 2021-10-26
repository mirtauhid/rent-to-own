import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from '../../../Helpers/httpRequest';

const ResendVerification = () => {
    const [loading, setLoading] = useState(false);
    
    const { push } = useRouter();

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        return errors;
    };


    const formik = useFormik({
        initialValues: { email: '' },
        validate,
        onSubmit: (values, { resetForm }) => {
            setLoading(true);
            axios({
                method: "POST",
                url: `${baseURL}/v2/auth/resend-verify`,
                data: values
            })
                .then((res) => {
                    // For toast
                    toast.success(res?.data?.message, {
                        theme: "colored",
                        autoClose: 5000
                    });
                    setTimeout(() => push('/'), 5000)
                    setLoading(false)
                    resetForm()
                })
                .catch((err) => {
                    // For toast
                    toast.error(err?.response?.data?.message, {
                        theme: "colored",
                        autoClose: 5000,
                    });
                    setTimeout(() => push('/'), 5000)
                    setLoading(false)
                })
        },
    });
    return (
        <div className="rounded-2xl border px-6 py-3 w-3/4 md:w-2/3 lg:w-2/5 xl:1/3 mx-auto my-12 bg-white">
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
            <form onSubmit={formik.handleSubmit} className="mb-10">
                <h2 className="uppercase text-center font-bold text-xl mb-5 mt-10">Resend Verification Link</h2>
                <div className="w-full mb-2 p-2">
                    <label className="block text-secondary text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter your new email here"
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
                    <button
                        type={loading ? "button" : "submit"}
                        className="w-full flex justify-center items-center bg-primary text-white rounded py-2"
                        disabled={loading}>
                        {
                            loading &&
                            <span className="animate-spin flex justify-center items-center w-7">
                                <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                            </span>
                        }
                        {loading ? "Loading..." : "Resend"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ResendVerification;