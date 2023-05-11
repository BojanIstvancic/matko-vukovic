import { ErrorMessage, useField } from "formik";

import styled from "@emotion/styled";

const StyledTextInputContainer = styled.div`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 23px;
`;

const StyledTextInput = styled.input`
  display: block;
  max-width: 400px;
`;

const TextInputErrrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 15px;
  font-size: 12px;
  color: var(--red-500);
`;

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
    <StyledTextInputContainer>
      <StyledTextInput {...field} {...props} />
      <TextInputErrrorMessage name={props.name} component="span" />
    </StyledTextInputContainer>
  );
};

export default TextInput;
