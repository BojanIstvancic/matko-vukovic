import { ErrorMessage, useField } from "formik";

interface TextInputProps {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
  // if we add some custom property that's not defined already (name, type, placeholder)
}

const TextInput = ({ ...props }: TextInputProps) => {
  const [field] = useField(props);
  /*
  returns an array with three positions
    - FieldProps - onChange, onBlur, Value
    - FieldMetaProps - computed values, touched, error
    - FieldHelperProps - imperatively change value field - example setValue
  */

  return (
    <>
      <input {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="error" />
    </>
  );
};

export default TextInput;
