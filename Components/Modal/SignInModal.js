import { useFormik } from 'formik';
import React from 'react';
import CustomModal from './CustomModal';

const SignInModal = ({ isOpen }) => {

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Confirm password required';
        } else if (values.password?.length < 6) {
            errors.password = 'Password must be at least 6 character!';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <CustomModal isOpen={isOpen}>
            <h2 className="uppercase text-center font-bold text-2xl my-10">Log In</h2>

            <form onSubmit={formik.handleSubmit} className="mb-10">
                <div className="w-full mb-2 p-2">
                    <label className="block text-secondary text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="john.doe@gmail.com"
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
                    <label className="block text-secondary text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password here"
                        autoComplete="off"
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

                <div className="w-full mb-2 p-2  text-right">
                    <a href="#" className="inline-block font-bold">Forget Password</a>
                </div>

                <div className="w-full mb-2 p-2">
                    <button type="submit" className="w-full bg-primary text-white rounded py-2">Submit</button>
                </div>

                <div className="w-full mb-2 p-2 text-center">
                    <p className="font-bold">Don't have an account? <a href="#" className="text-primary">Sign up</a>
                    </p>
                </div>
            </form>
        </CustomModal>
    );
};

export default SignInModal;