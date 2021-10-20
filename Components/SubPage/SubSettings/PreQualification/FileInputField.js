import React from "react";

import { Field, ErrorMessage } from "formik";
import { ImCross } from "react-icons/im";

const FileInputField = ({ label, fieldName }) => {
  return (
    <>
      <p className="mt-5 mb-3 text-base font-bold">
        {label} <span className="text-red-500">*</span>
      </p>

      <div className="md:flex ">
        <Field name={fieldName}>
          {(props) => {
            const { field } = props;
            return (
              <>
                <div
                  className={`md:w-3/5 border-2 px-4 rounded-l-md rounded-r-md md:rounded-r-none flex`}
                  style={{ paddingTop: "5px", minHeight: "40px" }}
                >
                  <div
                    className={`${
                      field.value ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {field.value
                      ? field.value.map((item) => {
                          return <p>{item.name}</p>;
                        })
                      : "Upload letter of employment"}
                  </div>

                  {field.value && (
                    <div className="flex-grow flex justify-end mt-1">
                      <ImCross
                        onClick={() =>
                          props.form.setFieldValue(fieldName, null)
                        }
                        className="text-xs cursor-pointer"
                        fill={"#EC485B"}
                      />
                    </div>
                  )}
                </div>
                <div className="mt-3 md:mt-0 md:w-2/5">
                  <input
                    id={fieldName}
                    type="file"
                    onChange={(e) => {
                      const fileArr = [...e.currentTarget.files];
                      props.form.setFieldValue(fieldName, fileArr);
                    }}
                    hidden
                    multiple
                    accept="application/pdf,image/*"
                  />
                  <label
                    htmlFor={fieldName}
                    className="bg-primary text-center text-white cursor-pointer font-bold rounded-r-md rounded-l-md md:rounded-l-none inline-block h-10 w-full pt-2"
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
};

export default FileInputField;
