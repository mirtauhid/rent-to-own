import React, { useEffect, useState } from "react";
import Requirement from "./Requirement";
import PreQualified from "./PreQualified";
import DocumentUploadSection from "./DocumentUploadSection";
import { useRouter } from "next/router";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import baseURL from "../../../../Helpers/httpRequest";
import {FcProcess} from "react-icons/fc"

const validationSchema = Yup.object().shape(
  {
    applicantIncome: Yup.number()
      .required("Required")
      .typeError("This field should be number"),
    downpayment: Yup.number()
      .required("Required")
      .typeError("This field should be number"),
    LOE: Yup.mixed().required("Required"),
    downpaymentDoc: Yup.mixed().required("Required"),
    CRA: Yup.mixed().required("Required"),
  },
  []
);

const index = () => {
  const [preQualificationData, setPreQualificationData] = useState();
  const [edit,setEdit] = useState(false);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${baseURL}/v2/prequalifications`, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setPreQualificationData(res.data.data.prequalification);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(preQualificationData);

  const initialValues = {
    applicantIncome: preQualificationData
      ? preQualificationData.applicantIncome
      : "",
    coApplicantIncome: preQualificationData
      ? preQualificationData.coApplicantIncome
      : "",
    downpayment: preQualificationData ? preQualificationData.downpayment : "",
    LOE: null,
    downpaymentDoc: null,
    CRA: null,
  };

  const onSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("applicantIncome", values.applicantIncome);
    formData.append("coApplicantIncome", values.coApplicantIncome);
    formData.append("downpayment", values.downpayment);
    formData.append("LOE", values.LOE);
    formData.append("downpaymentDoc", values.downpaymentDoc);
    formData.append("CRA", values.CRA);

    axios
      .get(`${baseURL}/v2/prequalifications`, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
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
          .then((res) => router.reload())
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {preQualificationData?.status === "PENDING" || edit ? (
        <>
        <div className="border-2 px-5 my-10 rounded-md">
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
                className="bg-primary text-white font-bold p-2 rounded-md w-full md:w-1/2 block mb-5"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Formik>
          {preQualificationData?.status === "PROCESSING" ? (
            <button
              className="bg-red-300 text-white font-bold p-2 rounded-md w-full md:w-1/2 mb-5"
              type="button"
              onClick={()=>setEdit(false)}
            >
              Cancel Editing
            </button>
          ) : null}
        </div>
        
        </>
      ) : preQualificationData?.status === "PROCESSING" ? (
        <div className="border-2 px-5 py-5 my-10">
          <FcProcess className="md:text-2xl mx-auto" />
          <p className="md:text-2xl mt-3 text-center">
            Your documents is submitted. We will get back to you shortly after
            reviewing . Thank you for Staying with Rent-To-Own.
          </p>
          <p onClick={() => setEdit(true)} className="text-center text-lg cursor-pointer mt-3 text-primary font-bold underline">Edit your submission</p>
        </div>
      ) : null}
    </>
  );
};

export default index;
