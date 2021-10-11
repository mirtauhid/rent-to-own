import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import baseURL from "../../../../Helpers/httpRequest";

const initialValues = {
  oldPassword: "",
  password: "",
  confirmPassword: ""
};

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Required").min(8, "Password too short"),
  password: Yup.string().required("Required").min(8, "Password too short"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const onSubmit = (values, { resetForm }) => {
  toast.warning("Processing!", {
    theme:"colored",
    autoClose: 1000,
    });
  axios({
    method: "POST",
    url: `${baseURL}/v2/auth/update-password`,
    data: values,
    headers: { Authorization: localStorage.getItem('authToken') }
  })
    .then((res) => {
      toast.success("Password changed!", {
        theme:"colored",
        autoClose: 2000,
        });
      resetForm();
    })
    .catch((err) => {
      toast.error("Password changing failed!", {
        theme:"colored"
        });
    })
};

const Account = ({ tab }) => {
  return (
    <>
    <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
    <div
      className={`border-2 rounded-lg mt-10 w-full px-5 py-5`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <p className="text-lg font-bold mb-2">Password</p>
          <Field
            type="password"
            placeholder="Old Password"
            className="border-2 focus:outline-none p-2 w-full  rounded-md text-gray-500"
            name="oldPassword"
          />
          <ErrorMessage
            name="oldPassword"
            component="div"
            className="text-red-500"
          />
          <Field
            type="password"
            placeholder="New Password"
            className="border-2 focus:outline-none p-2 w-full  rounded-md text-gray-500 mt-3"
            name="password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />

          <Field
            type="password"
            placeholder="Confirm New Password"
            className="border-2 focus:outline-none p-2 w-full  rounded-md text-gray-500 mt-3"
            name="confirmPassword"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500"
          />

          <p className="text-lg font-semibold mt-5">
            Pre-qualified requirements
          </p>
          <div className="flex mb-3">
            <div
              className="w-5 h-5 grid place-items-center"
              style={{ marginTop: "2px" }}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p>Use a mix of letters, numbers and symbols</p>
          </div>

          <div className="flex mb-3">
            <div
              className="w-5 h-5 grid place-items-center"
              style={{ marginTop: "2px" }}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p>Don’t use personal information or common words</p>
          </div>

          <div className="flex mb-3">
            <div
              className="w-5 h-5 grid place-items-center"
              style={{ marginTop: "2px" }}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p>We require a minimum of 8 characters</p>
          </div>

          <button
            type="submit"
            className="bg-primary py-2 rounded-md text-white font-bold w-full md:w-1/2"
          >
            Change password
          </button>
        </Form>
      </Formik>
    </div>
    </>
  );
};

export default Account;
