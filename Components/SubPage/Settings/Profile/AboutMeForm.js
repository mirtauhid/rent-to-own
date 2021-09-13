import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-day-picker/lib/style.css";
import DatePicker from "./DatePicker";
import Requirement from "./Requirement";

const AboutMeForm = ({setYesButtonClicked}) => {

    const [dob, setDob] = useState();
    const [dobError, setDobError] = useState(false);

    const SignupSchema = Yup.object().shape({
      firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      gender: Yup.string().required("Required"),
    });

    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        gender: "",
      },
      validationSchema: SignupSchema,
      onSubmit: (values, { resetForm }) => {
        if (dob) {
          const temp = { ...values, dob: dob };
          console.log(temp);
          resetForm();
          setDob(null);
        } else {
          setDobError(true);
        }
      },
    });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input
              type="text"
              placeholder="First name"
              className="border-2 focus:outline-none p-2 w-full  rounded-md text-gray-500"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <p className="text-red-400">{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Last name"
              className="border-2 focus:outline-none p-2 w-full rounded-md"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />
            {formik.errors.lastName && formik.touched.lastName ? (
              <p className="text-red-400">{formik.errors.lastName}</p>
            ) : null}
          </div>
        </div>

        <p className="mb-4 mt-7">
          This info below is used for analysis only, and never shared
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <select
              name="gender"
              id="gender"
              className={`bg-white border-2 p-2 rounded-md w-full ${
                formik.values.gender === "" ? "text-gray-400" : "text-gray-600"
              } focus:outline-none`}
              placeholder="Select Gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option value="" hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>

            {formik.errors.gender && formik.touched.gender ? (
              <p className="text-red-400">{formik.errors.gender}</p>
            ) : null}
          </div>

          <div className="col-span-1 relative">
            <DatePicker
              dob={dob}
              setDob={setDob}
              dobError={dobError}
              setDobError={setDobError}
            />
            {dobError ? <p className="text-red-400">Required</p> : null}
          </div>
        </div>
      </form>
      <Requirement formik={formik} setYesButtonClicked={setYesButtonClicked}/>
    </>
  );
};

export default AboutMeForm;
