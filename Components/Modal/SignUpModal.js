import { useFormik } from 'formik';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    content: {
        border: 0,
        width: '100%',
        padding: 0,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
};


const SignUpModal = ({isOpen}) => {

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

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: 'email',
            firstName: 'name',
            lastName:'kame',
            accountType:'kicu',
            password: 'nai'
        },
        validate,
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(formik.errors);
    const handleOnChange = (e)=>{console.log(e);}
    return (
        <div>
            <Modal
                style={customStyles}
                isOpen={isOpen}>
                <div className="rounded-2xl px-6 py-3 w-3/4 md:w-2/3 lg:w-2/5 xl:1/3 m-auto bg-white">
                    <h2 className="uppercase text-center font-bold text-xl my-5">Create an account</h2>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="w-full mb-2 p-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                 />
                                {
                                    formik.errors.email &&
                                    <div className="text-red-500 mt-2">{formik.errors.email}</div>
                                }
                        </div>

                        <div className="flex mb-2">
                            <div className="w-1/2 p-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name" 
                                    // onChange={formik.handleChange}
                                />
                            </div>
                            <div className="w-1/2 p-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name" 
                                    // onChange={formik.handleChange}
                                />
                            </div>
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="acountType">
                                Account Type
                            </label>
                            <select
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="acountType"
                                placeholder="Acount Type"
                                // onChange={formik.handleChange}
                                 >
                                <option>Select a type</option>
                                <option>Type 1</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                            </select>
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                // onChange={formik.handleChange}
                                 />
                        </div>

                        <div className="mb-6 p-2">
                            <label className=" block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span class="text-sm">
                                    I agree to RealEstate privacy policy and terms of use
                                </span>
                            </label>
                        </div>

                        <div className="w-full mb-2 p-2">
                            <button type="submit" className="w-full bg-green-400 text-white rounded py-2">Sign up</button>
                        </div>

                        <div className="w-full mb-2 p-2">
                            <p>Already have an account? <span className="text-green-400 font-bold">Login</span>
                            </p>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default SignUpModal;