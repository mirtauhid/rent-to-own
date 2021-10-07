import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import baseURL from "../../../Helpers/httpRequest";
import Description from "./Description";
import Location from "./Location";
import Photos from "./Photos";
import Preview from "./Preview";
import Pricing from "./Pricing";
import TimeLine from "./TimeLine";

const ListPropertyPages = ({ children }) => {
  const [steps, setSteps] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  // next router
  const router = useRouter()

  const { userData } = useSelector((state) => state.auth);

  const validate = (values) => {
    const errors = {};

    // For Description Validation
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.listingTypeId) {
      errors.listingTypeId = "Required";
    }
    if (!values.squareFootage) {
      errors.squareFootage = "Required";
    }
    if (!values.amOwner) {
      errors.amOwner = "Required";
    }
    if (!values.isAgree) {
      errors.isAgree = "Required";
    }
    if (!values.isInsurance) {
      errors.isInsurance = "Required";
    }

    // For Price Validation
    if (!values.price) {
      errors.price = "Please input a valid value!";
    }

    // For Photos Validation
    if (!values.images.length) {
      errors.images = "Please upload photos!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userId: userData?.id,
      name: "",
      description: "",
      listingTypeId: "",
      squareFootage: "",
      bedroom: 0,
      bathroom: 0,
      partialBathroom: 0,
      amOwner: false,
      isAgree: false,
      isInsurance: false,
      featureIds:[1,2],
      address: "",
      street: "",
      latitude: "",
      longitude: "",
      apt: "",
      zipCode: "",
      country: "",
      cityId: 3,
      apt: "",
      price: "",
      plotSize: 1000000000000000000,
      images: [],
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      axios({
        method: "POST",
        url: `${baseURL}/v2/public/property`,
        data: values
      })
        .then((res) => {
          if (res.data?.status_code) {
            // Dynamic routing
            router.push("/sellerProfile/yourListings")
          }
        })
        .catch((err) => console.log(err))
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
            {!steps.first && (
              <Description steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 2nd step (Location Page) */}
            {steps.first && !steps.second && (
              <Location steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 3rd step (Pricing Page) */}
            {steps.first && steps.second && !steps.third && (
              <Pricing steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 4th step (Photos Page) */}
            {steps.first && steps.second && steps.third && !steps.fourth && (
              <Photos steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 5th step (Preview Page) */}
            {steps.first &&
              steps.second &&
              steps.third &&
              steps.fourth &&
              !steps.fifth && (
                <Preview steps={steps} setSteps={setSteps} formik={formik} />
              )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListPropertyPages;
