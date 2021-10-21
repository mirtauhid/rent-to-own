import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOfferData } from '../../../redux/slices/offer';
import CustomModal from '../CustomModal';
import CommonPart from './CommonPart';
import FirstStep from './FirstStep';
import FourthStep from './FourthStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const MakeAnOffer = ({ pricePerMonth, showMakeAnOffer, setShowMakeAnOffer }) => {
    const [steps, setSteps] = useState({ first: false, second: false, third: false, fourth: false });

    const propertyDetails = useSelector(state => state?.property?.propertyDetails)

    const dispatch = useDispatch();

    const validate = values => {
        const errors = {};

        if (!values.isNeedDocUpdate) { errors.isNeedDocUpdate = 'This field is required!' }

        if (!values.includedItems) { errors.includedItems = 'This field is required!' }
        if (!values.terms) { errors.terms = 'This field is required!' }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            isNeedDocUpdate: '',
            includedItems: '',
            closingDate: '',
            terms: '',
        },
        validate,
        onSubmit: values => {
            dispatch(setOfferData(values))
        },
    });
    return (
        <CustomModal
            isOpen={showMakeAnOffer}
            customClasses={"rounded m-auto bg-white w-3/4 md:w-2/3 lg:w-5/6 xl:5/6 my-6"}>
            <CommonPart 
            propertyDetails={propertyDetails}
            pricePerMonth={pricePerMonth} 
            setShowMakeAnOffer={setShowMakeAnOffer} 
            formik={formik}>

                {/* For 1st step */}
                {
                    !steps.first &&
                    <FirstStep
                        steps={steps}
                        setSteps={setSteps}
                        formik={formik}
                        pricePerMonth={pricePerMonth} />
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

                {/* For fourth step */}
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
                    <FourthStep
                        steps={steps}
                        setSteps={setSteps} />
                }
            </CommonPart>
        </CustomModal>
    );
};

export default MakeAnOffer;