import { useFormik } from 'formik';
import React from 'react';

const Pricing = ({ steps, setSteps }) => {
    const validate = values => {
        const errors = {};

        if (!values.monthlyRent || values.monthlyRent === 0) { errors.monthlyRent = 'Please input a valid value!' }
        if (!values.january || values.january === 0) { errors.january = 'Please input a valid value!' }
        if (!values.february || values.february === 0) { errors.february = 'Please input a valid value!' }
        if (!values.march || values.march === 0) { errors.march = 'Please input a valid value!' }
        if (!values.april || values.april === 0) { errors.april = 'Please input a valid value!' }
        if (!values.may || values.may === 0) { errors.may = 'Please input a valid value!' }
        if (!values.june || values.june === 0) { errors.june = 'Please input a valid value!' }
        if (!values.july || values.july === 0) { errors.july = 'Please input a valid value!' }
        if (!values.august || values.august === 0) { errors.august = 'Please input a valid value!' }
        if (!values.september || values.september === 0) { errors.september = 'Please input a valid value!' }
        if (!values.october || values.october === 0) { errors.october = 'Please input a valid value!' }
        if (!values.november || values.november === 0) { errors.november = 'Please input a valid value!' }
        if (!values.december || values.december === 0) { errors.december = 'Please input a valid value!' }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            monthlyRent: 0,
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
        },
        validate,
        onSubmit: values => {
            setSteps({ ...steps, fifth: true })
        },
    });

    const handleMonthlyRent = (value) => {
        formik.setFieldValue('monthlyRent', value)
        formik.setFieldValue('january', value)
        formik.setFieldValue('february', value)
        formik.setFieldValue('march', value)
        formik.setFieldValue('april', value)
        formik.setFieldValue('may', value)
        formik.setFieldValue('june', value)
        formik.setFieldValue('july', value)
        formik.setFieldValue('august', value)
        formik.setFieldValue('september', value)
        formik.setFieldValue('october', value)
        formik.setFieldValue('november', value)
        formik.setFieldValue('december', value)
    }
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">how much does it cost?</h2>
            <form onSubmit={formik.handleSubmit} >

                <div className="w-full mb-2 p-2">
                    <label className="block text-secondary text-sm font-bold mb-2" htmlFor="monthlyRent">
                        Base monthly rent
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        id="monthlyRent"
                        type="number"
                        placeholder="Please enter your base monthly rent here... "
                        name="monthlyRent"
                        value={formik.values.monthlyRent}
                        onChange={(e) => handleMonthlyRent(e.target.value)}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.monthlyRent && formik.errors.monthlyRent &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.monthlyRent}</div>
                    }
                </div>

                <div className="flex">
                    <div className="w-1/3">
                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="january">
                                January
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="january"
                                type="number"
                                placeholder="$1"
                                name="january"
                                value={formik.values.january}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.january && formik.errors.january &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.january}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="february">
                                february
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="february"
                                type="number"
                                placeholder="$1"
                                name="february"
                                value={formik.values.february}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.february && formik.errors.february &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.february}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="march">
                                march
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="march"
                                type="number"
                                placeholder="$1"
                                name="march"
                                value={formik.values.march}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.march && formik.errors.march &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.march}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="april">
                                april
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="april"
                                type="number"
                                placeholder="$1"
                                name="april"
                                value={formik.values.april}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.april && formik.errors.april &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.april}</div>
                            }
                        </div>
                    </div>

                    <div className="w-1/3">
                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="may">
                                may
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="may"
                                type="number"
                                placeholder="$1"
                                name="may"
                                value={formik.values.may}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.may && formik.errors.may &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.may}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="june">
                                june
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="june"
                                type="number"
                                placeholder="$1"
                                name="june"
                                value={formik.values.june}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.june && formik.errors.june &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.june}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="july">
                                july
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="july"
                                type="number"
                                placeholder="$1"
                                name="july"
                                value={formik.values.july}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.july && formik.errors.july &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.july}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="august">
                                august
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="august"
                                type="number"
                                placeholder="$1"
                                name="august"
                                value={formik.values.august}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.august && formik.errors.august &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.august}</div>
                            }
                        </div>
                    </div>

                    <div className="w-1/3">
                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="september">
                                september
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="september"
                                type="number"
                                placeholder="$1"
                                name="september"
                                value={formik.values.september}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.september && formik.errors.september &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.september}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="october">
                                october
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="october"
                                type="number"
                                placeholder="$1"
                                name="october"
                                value={formik.values.october}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.october && formik.errors.october &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.october}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="november">
                                november
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="november"
                                type="number"
                                placeholder="$1"
                                name="november"
                                value={formik.values.november}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.november && formik.errors.november &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.november}</div>
                            }
                        </div>

                        <div className="w-full mb-2 p-2">
                            <label className="block capitalize text-secondary text-sm font-bold mb-2" htmlFor="december">
                                december
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="december"
                                type="number"
                                placeholder="$1"
                                name="december"
                                value={formik.values.december}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.december && formik.errors.december &&
                                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.december}</div>
                            }
                        </div>
                    </div>
                </div>

                <div className="my-6">
                    <button
                        onClick={() => handleMonthlyRent(0)}
                        type="button"
                        className="border-2 border-primary rounded py-2 px-16 mx-2 text-primary">
                        Reset Base Month Rent
                    </button>
                </div>

                <div className="w-full mb-2 p-2">
                    <button type="submit" className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
                </div>
            </form>
        </div>
    );
};

export default Pricing;