import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import SellerProfileLayout from '.';
import baseURL from '../../../Helpers/httpRequest';

const AccountSettingsPage = () => {
    const [error, setError] = useState({ status: false, msg: "" })
    const [success, setSuccess] = useState({status:false,msg:""})
    const [loading, setLoading] = useState(false)

    const validate = values => {
        const errors = {};
        if (!values.oldPassword) {
            errors.oldPassword = 'Old password required';
        }
        if (!values.password) {
            errors.password = 'Password required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
            errors.password = 'Password must be at least 8 character, a capital & a small letter, a number & a special character required!'
        }

        if (!values.confPassword) {
            errors.confPassword = 'Confirm password required';
        } else if (values.password !== values.confPassword) {
            errors.confPassword = 'Password & confirm password not matched!'
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            password: '',
            confPassword: '',
        },
        validate,
        onSubmit: values => {
            // loading started
            setLoading(true);
            setSuccess({status:false,msg:""});
            setError({status:false,msg:""})

            axios({
                method: "POST",
                url: `${baseURL}/v2/auth/update-password`,
                data: values,
                headers: { Authorization: localStorage.getItem('authToken') }
            })
                .then((res) => {
                  // loading end
                  setLoading(false);
                  setSuccess({status:res.data?.success,msg:res.data?.message});
                })
                .catch((err) => {
                    // loading end
                    setLoading(false);
                    setError({ status: true, msg: err.response?.data?.message })
                    
                    console.log(err)
                })
        },
    });
    console.log(formik.values);
    return (
        <SellerProfileLayout activeUrl="accountSettings">
            <div className="px-6 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold capitalize">Account settings</h2>
                    {/* <Link href="/sellerProfile/yourListings">
                        <a className={"inline-block rounded-lg py-2 px-5 border-2 border-primary text-primary font-medium"}>Edit Settings</a>
                    </Link> */}
                </div>
                {
                    error.status && <p className="bg-red-50 border border-red-200 text-red-500 text-center p-2 my-2 rounded">{error.msg}</p>
                }
                {
                    success.status  && <p className="bg-green-50 border border-green-200 text-green-500 text-center p-2 my-2 rounded">{success.msg}</p>
                }
                <form
                    onSubmit={formik.handleSubmit}
                    className="lg:w-2/3">
                    <h3 className="text-xl my-4 font-medium">Change Password</h3>


                    <div className="w-full flex mt-5 flex-wrap">

                        <div className="w-full mb-2 py-2">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Old password "
                                name="oldPassword"
                                value={formik.values.oldPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.oldPassword && formik.errors.oldPassword &&
                                <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.oldPassword}</div>
                            }
                        </div>

                        <div className="w-full mb-2 py-2">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="New password "
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.password && formik.errors.password &&
                                <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.password}</div>
                            }
                        </div>

                        <div className="w-full mb-2 py-2">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Confirm password "
                                name="confPassword"
                                value={formik.values.confPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.confPassword && formik.errors.confPassword &&
                                <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.confPassword}</div>
                            }
                        </div>
                    </div>

                    <h3 className="text-md font-medium mt-3 underline">Tips for a secure password:</h3>
                    <ul className="list-disc ml-5 text-sm ">
                        <li className="font-medium text-green-500">Use a mix of letters, numbers and symbols (Example- @, $, !, %, *, ?, &)</li>
                        <li className="font-medium text-green-500">Don’t use personal information or common words</li>
                        <li className="font-medium text-green-500">Make it long - the longer the better. We require a minimum of 8 characters</li>
                    </ul>

                    <div className="my-4 mx-2">
                        <button
                            type={loading ? "button" : "submit"}
                            className="w-full flex justify-center items-center bg-primary text-white rounded py-2"
                            disabled={loading}
                        >
                            {
                                loading &&
                                <span className="animate-spin flex justify-center items-center w-7">
                                    <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                                </span>
                            }
                            {loading ? "Loading..." : "Change password"}
                        </button>
                    </div>
                </form>
            </div>
        </SellerProfileLayout>
    );
};

export default AccountSettingsPage;