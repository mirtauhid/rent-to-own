import React from "react";
import Requirement from "./Requirement";
import PreQualified from "./PreQualified";
import DocumentUploadSection from "./DocumentUploadSection";
import ContactInfo from "./ContactInfo";

import { Formik, Form } from "formik";
import * as Yup from "yup";

//formik properties starts

const initialValues = {
  applicantIncome: null,
  coApplicantIncome: null,
  downpayment: null,
  LOE: null,
  downpaymentDoc: null,
  CRA: null,
  email: "",
  phoneNumber: "",
  secondaryPhoneNumber: "",
  address: "",
  suite: "",
  city: "",
  province: "",
  country: "",
  postalCode: "",
};

const phoneRegExp =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const validationSchema = Yup.object().shape({
  applicantIncome: Yup.number()
    .required("Required")
    .typeError("This field should be number"),
  downpayment: Yup.number()
    .required("Required")
    .typeError("This field should be number"),
  LOE: Yup.mixed().required("Required"),
  downpaymentDoc: Yup.mixed().required("Required"),
  CRA: Yup.mixed().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Enter valid phone number")
    .required("Required"),
  secondaryPhoneNumber: Yup.string().matches(
    phoneRegExp,
    "Enter valid phone number"
  ),

  address: Yup.string().required("Required"),
  suite: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  province: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  postalCode: Yup.string().required("Required"),
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
          <ContactInfo />
          <button
            className="bg-primary text-white font-bold p-2 rounded-md md:w-1/2 mb-5 mt-5"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default index;
