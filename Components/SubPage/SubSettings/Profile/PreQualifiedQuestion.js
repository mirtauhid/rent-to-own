import React from 'react'
import { Field, ErrorMessage } from "formik";

const PreQualifiedQuestion = ({question,name}) => {
    return (
      <div className="mb-5">
        <p className="font-bold">
          {question}
          <span className="text-red-500">*</span>
        </p>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name={name} value="<65000" />
            Less than $65,000
          </label>
          <br />

          <label>
            <Field type="radio" name={name} value="65000-100000" />
            $65,000-$100,000
          </label>
          <br />
          <label>
            <Field type="radio" name={name} value="100000-150000" />
            $100,000-$150,000
          </label>
          <br />
          <label>
            <Field type="radio" name={name} value="150000+" />
            $150000+
          </label>
          <br />
        </div>
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    );
}

export default PreQualifiedQuestion
