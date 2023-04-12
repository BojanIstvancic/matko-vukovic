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

  &.edit {
    background-color: var(--yellow-400);

    &:hover,
    &:focus {
      background-color: var(--yellow-600);
    }
  }
`;

export interface ButtonWrapperProps extends ButtonProps {
  children: JSX.Element | string;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default ButtonWrapper;
