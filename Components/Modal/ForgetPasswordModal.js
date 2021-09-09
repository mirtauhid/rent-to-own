import { useFormik } from 'formik';
import React from 'react';
import CustomModal from './CustomModal';

const ForgetPasswordModal = ({isOpen}) => {

    const validate = values => {
        const errors = {};

        if (!values.newPassword) {
            errors.newPassword = 'New password required!';
        }else if (values.newPassword?.length < 6) {
            errors.newPassword = 'Password must be at least 6 character!';
        }else if (values.confPassword && values.newPassword != values.confPassword) {
            errors.newPassword = 'New password and Confirm password did not matched!';
        }
        
        if (!values.confPassword) {
            errors.confPassword = 'Confirm password required';
        }else if (values.confPassword?.length < 6) {
            errors.confPassword = 'Password must be at least 6 character!';
        }else if (values.newPassword && values.newPassword != values.confPassword) {
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
        <CustomModal isOpen={isOpen}>
            <h2 className="uppercase text-center font-bold text-xl mb-5 mt-10">Change Password</h2>

            <form onSubmit={formik.handleSubmit} className="mb-10">
                <div className="w-full mb-2 p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                    New password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <div className="text-red-500 mt-2">{formik.errors.newPassword}</div>
                    }
                </div>

                <div className="w-full mb-2 p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confPassword">
                    Confirm password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <div className="text-red-500 mt-2">{formik.errors.confPassword}</div>
                    }
                </div>

                <div className="w-full mb-2 p-2">
                    <button type="submit" className="w-full bg-green-400 text-white rounded py-2">Submit</button>
                </div>
            </form>
        </CustomModal>
    );
};

export default ForgetPasswordModal;