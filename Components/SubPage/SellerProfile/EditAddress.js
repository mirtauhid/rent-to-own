import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from '../../../Helpers/httpRequest';

const EditAddress = ({fullWidth}) => {
    const [userAddress, setUserAddress] = useState({
        street: '',
        apt: '',
        city: '',
        province: '',
        country: '',
        zipCode: '',
    })

    const { userData } = useSelector((state) => state.auth);

    useEffect(() => {
        userData?.UserAddress && setUserAddress(userData?.UserAddress)
    }, [userData])

    const validate = values => {
        const errors = {};

        if (!values.street) { errors.street = 'Required' }
        if (!values.apt) { errors.apt = 'Required' }
        if (!values.city) { errors.city = 'Required' }
        if (!values.province) { errors.province = 'Required' }
        if (!values.country) { errors.country = 'Required' }
        if (!values.zipCode) { errors.zipCode = 'Required' }

        return errors;
    };

    const formik = useFormik({
        initialValues: userAddress,
        enableReinitialize: true,
        validate,
        onSubmit: values => {
            // For toast
            toast.warning("Address changing request processing!", {
                theme: "colored",
                autoClose: 2000,
            });

            // For axios config
            const method = userData?.UserAddress ? "PUT" : "POST";
            const url = userData?.UserAddress
                ? `${baseURL}/v2/user-addresses/profile-address/${userData?.UserAddress?.id}`
                : `${baseURL}/v2/user-addresses/profile-address`;

            axios({
                method: method,
                url: url,
                headers: { Authorization: localStorage.getItem('authToken') },
                data: values
            })
                .then((res) => {
                    // For toast
                    toast.success("Address changined!", {
                        theme: "colored",
                        autoClose: 2000,
                    });
                })
                .catch((err) => {
                    // For toast
                    toast.error("Address changining failed!", {
                        theme: "colored",
                        autoClose: 2000,
                    });
                })
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className={!fullWidth && "lg:w-2/3"}>
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
            <div className="w-full flex mt-5 flex-wrap">
                <label className="w-full font-medium">Address</label>

                <div className="w-full mb-2 py-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Street address "
                        name="street"
                        value={formik.values.street}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.street && formik.errors.street &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.street}</div>
                    }
                </div>

                <div className="w-full mb-2 py-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Apt or suit number"
                        name="apt"
                        value={formik.values.apt}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.apt && formik.errors.apt &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.apt}</div>
                    }
                </div>

                <div className="w-1/2 mb-2 py-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="City"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.city && formik.errors.city &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.city}</div>
                    }
                </div>

                <div className="w-1/2 mb-2 p-2">
                    <input
                        className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-medium"
                        name="province"
                        placeholder="Province"
                        value={formik?.values?.province}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {
                        formik.touched.province && formik.errors.province &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.province}</div>
                    }
                </div>

                <div className="w-1/2 mb-2 py-2">
                    <input
                        className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-medium"
                        name="country"
                        placeholder="Country/Region"
                        value={formik?.values?.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {
                        formik.touched.country && formik.errors.country &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.country}</div>
                    }
                </div>

                <div className="w-1/2 mb-2 p-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Postal code"
                        name="zipCode"
                        value={formik.values.zipCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.zipCode && formik.errors.zipCode &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.zipCode}</div>
                    }
                </div>
            </div>
            <div className="my-4 mx-2">
                <button onClick={formik.handleSubmit} type="submit" className="py-2 px-6 bg-primary text-white rounded">Update Address</button>
            </div>
        </form>
    );
};

export default EditAddress;