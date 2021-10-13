import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React,{useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from '../../Helpers/httpRequest';

const ForgetPasswordUpdate = () => {
    const [loading, setLoading] = useState(false)
    const { query, push } = useRouter();

    const validate = values => {
        const errors = {};

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
            password: '',
            confPassword: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setLoading(true);
            axios({
                method: "POST",
                url: `${baseURL}/v2/forget-password/update`,
                data: { ...values, hash: query?.hash }
            })
                .then((res) => {
                    // For toast
                    toast.success(res?.data?.message, {
                        theme: "colored",
                        autoClose: 5000,
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
            {
                (query && !query?.hash)
                    ? <div className="my-10 text-center">
                        <h2 className="text-2xl text-red-500 font-bold mb-4 uppercase">Invalid token!</h2>
                        <p>Please check your mail inbox or spam for the valid link with token.</p>
                    </div>
                    : <form onSubmit={formik.handleSubmit} className="mb-10">
                        <h2 className="uppercase text-center font-bold text-xl mb-5 mt-10">Change Password</h2>
                        <div className="w-full mb-2 p-2">
                            <label className="block text-secondary text-sm font-bold mb-2" htmlFor="password">
                                New password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your new password here"
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
                            <label className="block text-secondary text-sm font-bold mb-2" htmlFor="confPassword">
                                Confirm password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="confPassword"
                                type="password"
                                placeholder="Confirm your password here"
                                autoComplete="off"
                                name="confPassword"
                                value={formik.values.confPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.confPassword && formik.errors.confPassword &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.confPassword}</div>
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
                            {loading ? "Loading..." : "Change password"}
                            </button>
                        </div>
                    </form>
            }
        </div>
    );
};

export default ForgetPasswordUpdate;