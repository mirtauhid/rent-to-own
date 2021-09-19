import { useFormik } from 'formik';
import React, { useState } from 'react';
import CustomModal from '../CustomModal';
import CommonPart from './CommonPart';
import FifthStep from './FifthStep';
import FirstStep from './FirstStep';
import FourthStep from './FourthStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const MakeAnOffer = ({ isOpen }) => {
    const [steps, setSteps] = useState({ first: false, second: false, third: false, fourth: false });
    const [isClose, setIsClose] = useState(!isOpen);


    const validate = values => {
        const errors = {};

        if (!values.preQualified) { errors.preQualified = 'This field is required!' }
        else if (values.preQualified === 'no') { errors.preQualified = 'You are not qualified to proceed!' }

        if (!values.listItems) { errors.listItems = 'This field is required!' }
        if (!values.terms) { errors.terms = 'This field is required!' }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            preQualified: '',
            listItems: '',
            anOtherPropertySell: false,
            inspection: false,
            appraisal: false,
            appropriateFinancing: false,
            expirationDate: '',
            closingDate: '',
            terms: '',

        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values))
        },
    });
    return (
        <CustomModal
            isOpen={!isClose}
            customClasses={"rounded m-auto bg-white w-3/4 md:w-2/3 lg:w-5/6 xl:5/6 my-6"}>
            <CommonPart setIsClose={setIsClose} formik={formik}>

                {/* For 1st step */}
                {
                    !steps.first &&
                    <FirstStep
                        steps={steps}
                        setSteps={setSteps}
                        formik={formik} />
                }

                {/* For 2nd step */}
                {
                    steps.first &&
                    !steps.second &&
                    <SecondStep
                        steps={steps}
                        setSteps={setSteps}
                        formik={formik} />
                }

                {/* For 3rd step */}
                {
                    steps.first &&
                    steps.second &&
                    !steps.third &&
                    <ThirdStep
                        steps={steps}
                        setSteps={setSteps}
                        formik={formik} />
                }

                {/* For fourth step */}
                {
                    steps.first &&
                    steps.second &&
                    steps.third &&
                    !steps.fourth &&
                    <FourthStep
                        steps={steps}
                        setSteps={setSteps}
                        formik={formik} />
                }

                {/* For fourth step */}
                {
                    steps.first &&
                    steps.second &&
                    steps.third &&
                    steps.fourth &&
                    <FifthStep
                        steps={steps}
                        setSteps={setSteps} />
                }
            </CommonPart>
        </CustomModal>
    );
};

export default MakeAnOffer;