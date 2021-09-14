import React from 'react'
import { Field, ErrorMessage } from "formik";

const InputField = ({fieldName,placeholder}) => {
    return (
      <>
        <Field
          type="text"
          placeholder={placeholder}
          className="border-2 focus:outline-none p-2 w-full rounded-md text-gray-600"
          name={fieldName}
        />
        <ErrorMessage name={fieldName} component="div" className="text-red-500" />
      </>
    );
}

export default InputField
