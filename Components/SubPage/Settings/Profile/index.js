import { useState } from "react";
import AboutMeForm from "./AboutMeForm";
import DocumentUploadSection from "./DocumentUploadSection";
import ContactInfo from "./ContactInfo";
import Address from "./Address";
import style from "../style.module.css";
import Requirement from "./Requirement";

import { Formik, Form } from "formik";
import * as Yup from "yup";


//formik properties starts

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  LOE: "",
  downPayment: "",
  CRA: "",
  email: "",
  phoneNumber: "",
  secondaryPhoneNumber: "",
  address:"",
  suite:"",
  city:"",
  province:"",
  country:"",
  postalCode:""
};

const phoneRegExp =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  LOE: Yup.mixed().required("Required"),
  downPayment: Yup.mixed().required("Required"),
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

const Profile = ({ tab }) => {
  const [yesButtonClicked, setYesButtonClicked] = useState(false);

  return (
    <div
      className={`mt-10 w-full transition duration-300 ${
        tab === "profile"
          ? "transform translate-x-0"
          : "transform -translate-x-full"
      } mb-10 `}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="border-2 px-5 rounded-lg">
            <div className="flex gap-5 mt-7">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="/images/img_avatar.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-1">
                <p className="font-bold text-lg">Access:Guest</p>
                <p className="text-gray-400">Member since September 5, 2021</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-semibold text-lg">About me</p>
              <p className="mt-2 mb-5">
                Your name will Not be publicly displayed.
              </p>
            </div>

            <AboutMeForm />
            <Requirement setYesButtonClicked={setYesButtonClicked} />
          </div>

          {yesButtonClicked && <DocumentUploadSection />}
          {yesButtonClicked && <ContactInfo />}
          {yesButtonClicked && <Address />}
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
