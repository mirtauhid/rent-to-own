import React from "react";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import * as Yup from "yup";

const initialValues = {
  oldPassword:"",
  password:"",
  confirmPassword:""
};

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Required").min(8, "Password too short"),
  password: Yup.string().required("Required").min(8, "Password too short"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
};

const Account = ({ tab }) => {
  return (
    <div
      className={`border-2 rounded-lg mt-10 w-full absolute transition duration-300 ${
        tab === "account"
          ? "transform translate-x-0"
          : "transform translate-x-full"
      } px-5 py-5`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <p className="text-lg font-bold mb-2">Password</p>
          <Field
            type="text"
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
            type="text"
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
            type="text"
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
  );
};

export default Account;
