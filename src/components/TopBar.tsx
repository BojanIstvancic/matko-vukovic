import styled from "styled-components";
import Container from "./Container";

const StyledTopBar = styled.div`
  display: none;
  background: var(--secondary);

  @media (min-width: 768px) {
    display: block;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;

  padding: 10px 0;
  list-style: none;
`;
const SocialIcon = styled.li`
  margin-right: 10px;
`;
const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 35px;
  width: 35px;

  background: var(--green-800);
  border-radius: 50%;
  transition: 0.5s;

  i {
    font-size: 20px;
    color: var(--gray-300);
    transition: 0.5s;
  }

  &:hover {
    background: var(--primary);

    i {
      color: var(--white);
    }
  }
`;

const TopBar: React.FC<{}> = () => {
  return (
    <StyledTopBar>
      <Container>
        <SocialIcons>
          <SocialIcon>
            <SocialIconLink
              href="https://www.facebook.com/profile.php?id=100007996877884"
              target="_blank"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </SocialIconLink>
          </SocialIcon>
          <SocialIcon>
            <SocialIconLink
              href="mailto:osmatkov_su@mts.rs"
              target="_blank"
              title="e-mail"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </SocialIconLink>
          </SocialIcon>
        </SocialIcons>
      </Container>
    </StyledTopBar>
  );
};

export default TopBar;
