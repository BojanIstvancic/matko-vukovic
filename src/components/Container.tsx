import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  margin: 0px auto;
  width: 100%;
  padding: 0px 24px;

  @media (min-width: 1200px) {
    width: 1136px;
    padding: 0px;
  }
`;

interface ContainerProps {
  children: JSX.Element;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
