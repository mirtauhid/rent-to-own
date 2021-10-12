import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from '../../Helpers/httpRequest';
import CustomModal from './CustomModal';

const ForgetPasswordModal = ({ showForgetPasswordModal, setShowForgetPasswordModal }) => {

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
        initialValues: {
            email: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            axios({
                method: "POST",
                url: `${baseURL}/v2/forget-password`,
                data: values
            })
                .then((res) => {
                    // For toast
                    toast.success(res.data.message, {
                        theme: "colored",
                        autoClose: 3000,
                    });
                    
                    resetForm()
                    // Closing the modal
                    
                })
                .catch((err) => {
                    console.log(err.response.data.message);
                    // For toast
                    toast.error(err?.response?.data?.message, {
                        theme: "colored",
                        autoClose: 2000,
                    });
                })
        },
    });
    return (
        <CustomModal isOpen={showForgetPasswordModal}>
            {/* For cross button  */}
            <div className="text-right px-4">
                <button
                    className="p-2 rounded hover:bg-gray-200 text-2xl"
                    onClick={() => setShowForgetPasswordModal(false)}
                >
                    <FaTimes />
                </button>
            </div>
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
            <h2 className="uppercase text-center font-bold text-xl mb-5 mt-10">Forget Password</h2>

            <form onSubmit={formik.handleSubmit} className="mb-10">
                <div className="w-full mb-2 p-2">
                    <label className="block text-secondary text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Type your email here"
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
                    <button type="submit" className="w-full bg-primary text-white rounded py-2">Submit</button>
                </div>
            </form>
        </CustomModal>
    );
};

export default ForgetPasswordModal;