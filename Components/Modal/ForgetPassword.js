import { useFormik } from 'formik';
import React from 'react';

const ForgetPasswordModal = () => {

    const validate = values => {
        const errors = {};

        if (!values.newPassword) {
            errors.newPassword = 'New password required!';
        } else if (values.newPassword?.length < 6) {
            errors.newPassword = 'Password must be at least 6 character!';
        } else if (values.confPassword && values.newPassword != values.confPassword) {
            errors.newPassword = 'New password and Confirm password did not matched!';
        }

        if (!values.confPassword) {
            errors.confPassword = 'Confirm password required';
        } else if (values.confPassword?.length < 6) {
            errors.confPassword = 'Password must be at least 6 character!';
        } else if (values.newPassword && values.newPassword != values.confPassword) {
            errors.confPassword = 'New password and Confirm password did not matched!';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confPassword: ''
        },
        validate,
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
            <div className="rounded-2xl border px-6 py-3 w-3/4 md:w-2/3 lg:w-2/5 xl:1/3 mx-auto my-12 bg-white">
                <h2 className="uppercase text-center font-bold text-xl mb-5 mt-10">Change Password</h2>

                <form onSubmit={formik.handleSubmit} className="mb-10">
                    <div className="w-full mb-2 p-2">
                        <label className="block text-secondary text-sm font-bold mb-2" htmlFor="newPassword">
                            New password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                            id="newPassword"
                            type="password"
                            placeholder="Enter your new password here"
                            name="newPassword"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.newPassword && formik.errors.newPassword &&
                            <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.newPassword}</div>
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
                        <button type="submit" className="w-full bg-primary text-white rounded py-2">Submit</button>
                    </div>
                </form>
            </div>
    );
};

export default ForgetPasswordModal;