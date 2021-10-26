import axios from "axios";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FcProcess } from "react-icons/fc";
import * as Yup from "yup";
import baseURL from "../../../../Helpers/httpRequest";
import DocumentUploadSection from "./DocumentUploadSection";
import PreQualified from "./PreQualified";
import Requirement from "./Requirement";


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
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

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
      .catch((err) => {

      });
  }, []);

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
    // Started loading
    setLoading(true)
    
    const formData = new FormData();
    formData.append("applicantIncome", values.applicantIncome);
    formData.append("coApplicantIncome", values.coApplicantIncome ? values.coApplicantIncome : 0);
    formData.append("downpayment", values.downpayment);
    values.LOE?.forEach((item) => formData.append("LOE", item));
    values.downpaymentDoc?.forEach((item) =>
      formData.append("downpaymentDoc", item)
    );
    values.CRA?.forEach((item) => formData.append("CRA", item));

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
          .then((res) => {
            // End loading
            setLoading(false)
            router.reload()
          })
          .catch((err) => {

          });
      })
      .catch((err) => {

      });
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
                  className="flex justify-center items-center bg-primary text-white font-bold p-2 rounded-md w-full md:w-1/2 block mb-5"
                  type={loading ? "button" : "submit"}
                  disabled={loading}
                >
                  {
                    loading &&
                    <span className="animate-spin flex justify-center items-center w-7">
                      <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                    </span>
                  }
                  {loading ? "Loading..." : "Submit"}
                </button>
              </Form>
            </Formik>
            {preQualificationData?.status === "PROCESSING" ||
              preQualificationData?.status === "APPROVED" ? (
              <button
                className="bg-red-300 text-white font-bold p-2 rounded-md w-full md:w-1/2 mb-5"
                type="button"
                onClick={() => setEdit(false)}
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
            Your documents are submitted. We will get back to you shortly after
            reviewing . Thank you for staying with Rent-To-Own.
          </p>
          <p
            onClick={() => setEdit(true)}
            className="text-center text-lg cursor-pointer mt-3 text-primary font-bold underline"
          >
            Edit your submission
          </p>
        </div>
      ) : preQualificationData?.status === "APPROVED" ? (
        <div className="border-2 px-5 py-5 my-10">
          <FcProcess className="md:text-2xl mx-auto" />
          <p className="md:text-2xl mt-3 text-center">
            Congratulations. Your profile is verified. You are allowed to
            provide offer for maximum $
            {(preQualificationData.applicantIncome +
              preQualificationData.coApplicantIncome) *
              4 >
              500000
              ? "500,000"
              : (preQualificationData.applicantIncome +
                preQualificationData.coApplicantIncome) *
              4}
          </p>
          <p
            onClick={() => setEdit(true)}
            className="text-center text-lg cursor-pointer mt-3 text-primary font-bold underline"
          >
            I would like to re-submit
          </p>
        </div>
      ) : null}
    </>
  );
};

export default index;
