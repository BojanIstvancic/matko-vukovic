import Button, { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-top: 20px;

  background-color: var(--primary);

  &:hover,
  &:focus {
    background-color: var(--green-700);
  }
`;

export interface ButtonWrapperProps extends ButtonProps {
  text: string;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ text, ...rest }) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};

export default ButtonWrapper;
