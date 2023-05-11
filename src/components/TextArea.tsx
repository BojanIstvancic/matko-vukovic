import { ErrorMessage, useField } from "formik";

import styled from "@emotion/styled";

const StyledTextAreaContainer = styled.div`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 23px;
`;

const StyledTextArea = styled.textarea`
  display: block;
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
}

const TextArea = ({ ...props }: TextAreaProps) => {
  const [field] = useField(props);

  return (
    <StyledTextAreaContainer>
      <StyledTextArea rows={4} cols={50} {...field} {...props} />
      <TextAreaErrrorMessage name={props.name} component="span" />
    </StyledTextAreaContainer>
  );
};

export default TextArea;
