import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  ariaDescribedby: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  type,
  label,
  ariaDescribedby,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <Field
      id={id}
      name={name}
      type={type}
      aria-required="true"
      aria-describedby={ariaDescribedby}
      className="form-control"
    />
    <ErrorMessage
      name={name}
      component="div"
      id={ariaDescribedby}
      className="error-message"
    />
  </div>
);

export default FormField;
