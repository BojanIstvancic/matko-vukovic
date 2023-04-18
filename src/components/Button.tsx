import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 15px;
  color: var(--white);

  min-height: 30px;
  min-width: 64px;
  flex-shrink: 0;
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

  &.edit {
    background-color: var(--yellow-400);

    &:hover,
    &:focus {
      background-color: var(--yellow-600);
    }
  }
`;

export interface ButtonProps {
  children: JSX.Element | string;
  type?: "button" | "submit";
  buttonType?: string;
  clickFunction?: (arg: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  buttonType,
  clickFunction,
  ...rest
}) => {
  return (
    <StyledButton
      className={buttonType}
      type={type}
      onClick={clickFunction}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
