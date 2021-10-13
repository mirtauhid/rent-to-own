import React,{useEffect,useState} from "react";
import Requirement from "./Requirement";
import PreQualified from "./PreQualified";
import DocumentUploadSection from "./DocumentUploadSection";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import baseURL from "../../../../Helpers/httpRequest";

//formik properties starts



// const phoneRegExp =
//   /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

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
},[]);

const index = () => {

  const [preQualificationData, setPreQualificationData] = useState();

  useEffect(() => {
    axios
      .get(`${baseURL}/v2/prequalifications`, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setPreQualificationData(res.data.data);
      })
      .catch((err) => console.log(err));

      

      
  },[]);

  const initialValues = {
    applicantIncome: null,
    coApplicantIncome: null,
    downpayment: null,
    LOE: null,
    downpaymentDoc: null,
    CRA: null,
  };

  console.log(preQualificationData);

  const onSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("applicantIncome", values.applicantIncome);
    formData.append("coApplicantIncome", values.coApplicantIncome);
    formData.append("downpayment", values.downpayment);
    formData.append("LOE", values.LOE);
    formData.append("downpaymentDoc", values.downpaymentDoc);
    formData.append("CRA", values.CRA);
    // console.log(formData.get("applicantIncome"));
    // console.log(formData.get("coApplicantIncome"));
    // console.log(formData.get("downpayment"));
    // console.log(formData.get("LOE"));
    // console.log(formData.get("downpaymentDoc"));
    // console.log(formData.get("CRA"));
    console.log(values);
    console.log(JSON.stringify(formData));

    axios
      .get(`${baseURL}/v2/prequalifications`, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        console.log(res.data.data);
        axios
          .put(
            `${baseURL}/v2/prequalifications/${res.data.data.prequalification.id}`,
            formData,
            {
              headers: {
                authorization: localStorage.getItem("authToken"),
              },
            }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
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
