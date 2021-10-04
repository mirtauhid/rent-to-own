import React from 'react'
import Requirement from './Requirement'
import PreQualified from './PreQualified'
import DocumentUploadSection from './DocumentUploadSection';

import { Formik, Form } from "formik";
import * as Yup from "yup";

//formik properties starts

const initialValues = {
  applicantIncome:null,
  coApplicantIncome:null,
  downpayment:null,
  LOE:null,
  downpaymentDoc:null,
  CRA:null
};

const validationSchema = Yup.object().shape({
  applicantIncome: Yup.number()
    .required("Required")
    .typeError("This field should be number"),
  downpayment: Yup.number()
    .required("Required")
    .typeError("This field should be number"),
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
};

const index = () => {
    return (
      <div className="border-2 px-5 my-10">
        <Requirement />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <PreQualified />
            <DocumentUploadSection />
            <button
              className="bg-primary text-white font-bold p-2 rounded-md md:w-1/2 mb-5"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
}

export default index
