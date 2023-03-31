import TextField, { TextFieldProps } from "@mui/material/TextField";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: var(--green-700);
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--green-700);
    }
  }
`;

const TextFieldWrapper: React.FC<TextFieldProps> = ({ ...rest }) => {
  return <StyledTextField {...rest} />;
};

export default TextFieldWrapper;
