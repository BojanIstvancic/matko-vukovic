import { ErrorMessage, useField } from "formik";

import styled from "@emotion/styled";

const StyledDateInputContainer = styled.div`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 23px;
`;

const StyledDateInput = styled.input`
  display: block;
  max-width: 400px;
`;

const DateInputErrrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 15px;
  font-size: 12px;
  color: var(--red-500);
`;

interface DateInputProps {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

const DateInput = ({ ...props }: DateInputProps) => {
  const [field] = useField(props);

  return (
    <StyledDateInputContainer>
      <StyledDateInput
        {...field}
        {...props}
        min={new Date().toISOString().split("T")[0]}
      />
      <DateInputErrrorMessage name={props.name} component="span" />
    </StyledDateInputContainer>
  );
};

export default DateInput;
