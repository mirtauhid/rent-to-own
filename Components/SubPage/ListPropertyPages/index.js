import { useFormik } from 'formik';
import React, { useState } from 'react';
import Amenities from './Amenities';
import Description from './Description';
import HouseRules from './HouseRules';
import Location from './Location';
import Photos from './Photos';
import Pricing from './Pricing';
import TimeLine from './TimeLine';

const ListPropertyPages = ({ children }) => {
    const [steps, setSteps] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false
    })


    const validate = values => {
        const errors = {};

        // For Description Validation
        if (!values.name) { errors.name = 'Required'; }
        if (!values.description) { errors.description = 'Required'; }
        if (!values.homeType) { errors.homeType = 'Required'; }
        if (!values.bedRooms) { errors.bedRooms = 'Required'; }
        if (!values.bathRooms) { errors.bathRooms = 'Required'; }
        if (!values.accomodates) { errors.accomodates = 'Required'; }
        if (!values.footage) { errors.footage = 'Required'; }
        if (!values.petPolicy) { errors.petPolicy = 'Required'; }
        if (!values.amOwner) { errors.amOwner = 'Required'; }
        if (!values.isAgree) { errors.isAgree = 'Required'; }
        if (!values.isInsurance) { errors.isInsurance = 'Required'; }

        // For House Rules Validation
        if (!values.houseRules) { errors.houseRules = 'You have to write your house rules!' }

        // For Location Validation
        if (!values.address) { errors.address = 'Address required!' }

        // For Price Validation
        if (!values.marketValue) { errors.marketValue = 'Please input a valid value!' }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            homeType: '',
            bedRooms: '',
            bathRooms: '',
            accomodates: '',
            footage: '',
            petPolicy: '',
            amOwner: true,
            isAgree: true,
            isInsurance: true,
            amenities: {
                wifi: false,
                kitchen: false,
                woodFloors: false,
                carpet: false,
                windowCoverings: false,
                innerMattress: false,
                sleeperCouch: false,
                ac: false,
                heater: false,
                washer: false,
                parking: false,
                garage: false,
                outdoorSpace: false,
                tv: false,
                laptop: false,
                smokeDetector: false,
                travelCrib: false,
                jacuzzi: false,
            },
            houseRules: '',
            address: '',
            details: '',
            marketValue: '',
            files:[],
            photos:[],
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <div className="container mx-auto py-7">
            <div className="md:flex">
                <div className="md:w-1/4 px-3">
                    <TimeLine steps={steps} />
                </div>

                <div className="md:w-3/4 shadow-md border border-gray-100">
                    <form onSubmit={formik.handleSubmit} className="w-full">
                        {/* This is for the 1st step (Description Page) */}
                        {
                            !steps.first &&
                            <Description
                                steps={steps}
                                setSteps={setSteps}
                                formik={formik} />
                        }

                        {/* This is for the 2nd step (Amenities Page) */}
                        {
                            steps.first &&
                            !steps.second &&
                            <Amenities
                                steps={steps}
                                setSteps={setSteps}
                                formik={formik} />
                        }

                        {/* This is for the 3rd step (House Rules Page) */}
                        {
                            steps.first &&
                            steps.second &&
                            !steps.third &&
                            <HouseRules
                                steps={steps}
                                setSteps={setSteps}
                                formik={formik} />
                        }

                        {/* This is for the 4th step (House Rules Page) */}
                        {
                            steps.first &&
                            steps.second &&
                            steps.third &&
                            !steps.fourth &&
                            <Location
                                steps={steps}
                                setSteps={setSteps}
                                formik={formik} />
                        }

                        {/* This is for the 5th step (Pricing Page) */}
                        {
                            steps.first &&
                            steps.second &&
                            steps.third &&
                            steps.fourth &&
                            !steps.fifth &&
                            <Pricing
                                steps={steps}
                                setSteps={setSteps}
                                formik={formik} />
                        }

                        {/* This is for the 6th step (Photos Page) */}
                        {
                            steps.first &&
                            steps.second &&
                            steps.third &&
                            steps.fourth &&
                            steps.fifth &&
                            !steps.sixth &&
                            <Photos
                                steps={steps}
                                setSteps={setSteps}
                                formik={formik} />
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ListPropertyPages;