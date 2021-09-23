import React from 'react'

import { Field, ErrorMessage } from "formik";

const FileInputField = ({label,fieldName}) => {
    return (
      <>
        <p className="mt-7 mb-3 text-base font-bold">
         {label}  <span className="text-red-500">*</span>
        </p>


        <div className="md:flex ">
          <Field name={fieldName}>
            {(props) => {
              const { field } = props;
              return (
                <>
                  <div
                    className={`md:w-3/5 md:border-r-0 border-2 px-4 rounded-l-md rounded-r-md md:rounded-r-none h-10 overflow-hidden`}
                    style={{ paddingTop: "5px" }}
                  >
                    <p
                      className={`${
                        field.value.name ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {field.value.name
                        ? field.value.name
                        : "Upload letter of employment"}
                    </p>
                  </div>
                  <div className="mt-3 md:mt-0 md:w-2/5">
                    <input
                      id={fieldName}
                      type="file"
                      onChange={(e) => {
                        props.form.setFieldValue(fieldName, e.target.files[0]);
                      }}
                      hidden
                    />
                    <label
                      htmlFor={fieldName}
                      className="bg-primary text-center text-white font-bold rounded-r-md rounded-l-md md:rounded-l-none inline-block h-10 w-full pt-2"
                    >
                      Choose file
                    </label>
                  </div>
                </>
              );
            }}
          </Field>
        </div>
        <ErrorMessage name={fieldName} component="div" className="text-red-500" />
      </>
    );
}

export default FileInputField
