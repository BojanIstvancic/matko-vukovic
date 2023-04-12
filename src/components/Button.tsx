import Button, { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  font-size: 1rem;
  background-color: var(--primary);
  text-transform: none;

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
