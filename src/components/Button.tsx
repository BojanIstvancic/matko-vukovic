import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 15px;
  color: var(--white);

  min-height: 30px;
  min-width: 64px;
  padding: 6px 8px;

  border-radius: 4px;
  background-color: var(--primary);

  outline: 0;
  border: 0;
  transition: all 500ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--green-700);
  }
`;

export interface ButtonProps {
  children: JSX.Element | string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest} type="submit">
      {children}
    </StyledButton>
  );
};

export default Button;
