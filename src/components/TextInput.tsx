import styled from "@emotion/styled";
import { ErrorMessage, useField } from "formik";

const StyledTextInputContainer = styled.div`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 23px;
`;

const StyledTextInput = styled.input`
  display: block;
  font-size: 15px;
  padding: 15px;
  border-radius: 4px;

  width: 100%;
  max-width: 400px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;

  transition: all 500ms ease;

  border: 1px solid var(--gray-300);

  &:hover,
  &:active,
  &:focus {
    border-color: var(--green-700);
    outline: none;
  }
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
