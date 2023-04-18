import styled from "@emotion/styled";
import { ErrorMessage, useField } from "formik";

const StyledTextAreaContainer = styled.div`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 23px;
`;

const StyledTextArea = styled.textarea`
  display: block;
  max-width: 400px;
`;

const TextAreaErrrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 15px;
  font-size: 12px;
  color: var(--red-500);
`;

interface TextAreaProps {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
  // if we add some custom property that's not defined already (name, type, placeholder)
}

const TextArea = ({ ...props }: TextAreaProps) => {
  const [field] = useField(props);
  /*
  returns an array with three positions
    - FieldProps - onChange, onBlur, Value
    - FieldMetaProps - computed values, touched, error
    - FieldHelperProps - imperatively change value field - example setValue
  */

  return (
    <StyledTextAreaContainer>
      <StyledTextArea rows={4} cols={50} {...field} {...props} />
      <TextAreaErrrorMessage name={props.name} component="span" />
    </StyledTextAreaContainer>
  );
};

export default TextArea;
