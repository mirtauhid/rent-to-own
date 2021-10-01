import { useState } from "react";

import Address from "./Address"
import { Field, ErrorMessage } from "formik";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  const [showNumberField, setShowNumberField] = useState(false);

  return (
    <div className="border-2 px-5 py-5 rounded-lg mt-10">
      <p className="text-lg font-bold mb-2">Contact info</p>

      <div className="flex border-2 rounded-md px-2">
        <MdEmail className="text-xl mt-3 text-gray-400" fill={"#acacac"} />
        <Field
          type="text"
          placeholder="joe00008@gmail.com"
          className="focus:outline-none p-2 w-full  rounded-md text-gray-500"
          name="email"
        />
      </div>

      <ErrorMessage name="email" component="div" className="text-red-500" />

      <div className="flex border-2 rounded-md mt-4">
        <div className="text-gray-500 bg-gray-300 w-12 grid place-items-center">
          +1
        </div>
        <Field
          type="text"
          placeholder="1234567890"
          className="focus:outline-none p-2 w-full  rounded-md text-gray-500"
          name="phoneNumber"
        />
      </div>

      <ErrorMessage
        name="phoneNumber"
        component="div"
        className="text-red-500"
      />

      <p
        className="text-sm font-bold underline cursor-pointer mt-2"
        onClick={() => setShowNumberField(true)}
      >
        Add another number
      </p>

      {showNumberField && (
        <>
          <div className="flex border-2 rounded-md mt-3">
            <div className="text-gray-400 bg-gray-300 w-12 grid place-items-center">
              +1
            </div>
            <Field
              type="text"
              placeholder="1234567890"
              className="focus:outline-none p-2 w-full  rounded-md text-gray-500"
              name="secondaryPhoneNumber"
            />
          </div>

          <ErrorMessage
            name="secondaryPhoneNumber"
            component="div"
            className="text-red-500"
          />
        </>
      )}

      <Address/>
    </div>
  );
};

export default ContactInfo;
