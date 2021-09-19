import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import SellerProfileLayout from '.';

const AccountSettingsPage = () => {
    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.phone) { errors.phone = 'Required' }
        if (!values.street) { errors.street = 'Required' }
        if (!values.aptNo) { errors.aptNo = 'Required' }
        if (!values.city) { errors.city = 'Required' }
        if (!values.province) { errors.province = 'Required' }
        if (!values.country) { errors.country = 'Required' }
        if (!values.postal) { errors.postal = 'Required' }
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
            email: '',
            phone: '',
            street: '',
            aptNo: '',
            city: '',
            province: '',
            country: '',
            postal: '',
            password: '',
            confPassword: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values))
        },
    });
    console.log(formik.values);
    return (
        <SellerProfileLayout activeUrl="accountSettings">
            <div className="px-6 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold capitalize">Account settings</h2>
                    <Link href="/sellerProfile/yourListings">
                        <a className={"inline-block rounded-lg py-2 px-5 border-2 border-primary text-primary font-medium"}>Edit Settings</a>
                    </Link>
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="lg:w-2/3">
                    <h3 className="text-xl my-4 font-medium">CONTACT DETAILS</h3>

                    <div className="w-full mb-2 py-2">
                        <label className="w-full font-medium">Your email address</label>
                        <input
                            className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="8"
                            placeholder="johndoe@algosolver.com"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.email && formik.errors.email &&
                            <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.email}</div>
                        }
                    </div>

                    <div className="w-full mb-2 py-2">
                        <label className="w-full font-medium">Your phone number</label>
                        <input
                            className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="8"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.phone && formik.errors.phone &&
                            <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.phone}</div>
                        }
                    </div>

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
                                name="aptNo"
                                value={formik.values.aptNo}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.aptNo && formik.errors.aptNo &&
                                <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.aptNo}</div>
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
                            <select
                                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-medium"
                                name="province"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="" className="hidden">Province </option>
                                <option value="male">Province 1</option>
                                <option value="female">Province 2</option>
                            </select>
                            {
                                formik.touched.province && formik.errors.province &&
                                <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.province}</div>
                            }
                        </div>

                        <div className="w-1/2 mb-2 py-2">
                            <select
                                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline font-medium"
                                name="country"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="" className="hidden">Country / region </option>
                                <option value="male">Bangladesh</option>
                                <option value="female">India</option>
                            </select>
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
                                name="postal"
                                value={formik.values.postal}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.postal && formik.errors.postal &&
                                <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.postal}</div>
                            }
                        </div>
                    </div>


                    <div className="w-full flex mt-5 flex-wrap">
                        <label className="w-full font-medium">Password</label>

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
                        <button onClick={formik.handleSubmit} type="submit" className="py-2 px-6 bg-primary text-white rounded">Save Changes</button>
                    </div>
                </form>
            </div>
        </SellerProfileLayout>
    );
};

export default AccountSettingsPage;