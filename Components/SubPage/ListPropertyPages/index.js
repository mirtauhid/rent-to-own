import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from "../../../Helpers/httpRequest";
import Description from "./Description";
import Features from "./Features";
import Location from "./Location";
import Photos from "./Photos";
import Preview from "./Preview";
import Pricing from "./Pricing";
import TimeLine from "./TimeLine";

const ListPropertyPages = ({ children }) => {
  const [steps, setSteps] = useState({
    first: true,
    second: true,
    third: true,
    fourth: false,
    fifth: false,
  });

  // next router
  const router = useRouter()

  const { userData } = useSelector((state) => state.auth);
  const [propertyId, setPropertyId] = useState();

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
    }else if (values.price < 200000) {
      errors.price = "Less than 200,000 is not acceptable!";
    }else if (values.price > 1150000) {
      errors.price = "More than 1,150,000 is not acceptable!";
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
      featureIds: [],
      address: "",
      street: "",
      latitude: "",
      longitude: "",
      apt: "",
      zipCode: "",
      country: "",
      cityId: 3,
      price: "",
      images: [],
      base64s: []
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      // For toast
      toast.warning("Your request processing!", {
        theme: "colored",
        autoClose: 5000,
      });

      const formData = new FormData();
      for (var key in values) {
        if (key === 'images') {
          values.images?.forEach((item) => formData.append("images", item));
        } else if (key === 'featureIds') {
          formData.append("featureIds", JSON.stringify(values?.featureIds))
        } else if (key !== 'base64s') {
          formData.append(key, values[key]);
        }
      }

      axios({
        method: "POST",
        url: `${baseURL}/v3/public/property`,
        data: formData,
        headers: {
          Authorization: localStorage.getItem("authToken"),
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          if (res.data?.status_code) {
            // For toast
            toast.success("Property listed successfully!", {
              theme: "colored",
              autoClose: 3000,
            });
            
            axios({
              method: "POST",
              url: `https://rent-to-own.zetech.us/api/v2/payments`,
              data: { propertyId: res.data?.data.property.id },
              headers: { Authorization: localStorage.getItem("authToken") }
            }).then(response => {
              router.push(response.data?.data.url)
            }).catch((error) => {
              
            })
            // Dynamic routing
            //router.push("/sellerProfile/yourListings")
          }
        })
        .catch((err) => {
          // For toast
          toast.error("Property listing failed!", {
            theme: "colored",
            autoClose: 2000,
          });
        })
        
      {
        propertyId && axios({
          method: "POST",
          url: `${baseURL}/v2/payments`,
          data: { propertyId: propertyId },
          headers: { Authorization: localStorage.getItem("authToken") }
        })
      }
      
    },
  });
  return (
    <div className="container mx-auto py-7">
      <ToastContainer
        position="top-center"
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
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
              <Features steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 2nd step (Location Page) */}
            {steps.second && !steps.third && (
              <Location steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 3rd step (Pricing Page) */}
            {steps.first && steps.second && steps.third && !steps.fourth && (
              <Pricing steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 4th step (Photos Page) */}
            {steps.first && steps.second && steps.third && steps.fourth && !steps.fifth && (
              <Photos steps={steps} setSteps={setSteps} formik={formik} />
            )}

            {/* This is for the 5th step (Preview Page) */}
            {steps.first &&
              steps.second &&
              steps.third &&
              steps.fourth &&
              steps.fifth && (
                <Preview steps={steps} setSteps={setSteps} formik={formik} />
              )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListPropertyPages;
