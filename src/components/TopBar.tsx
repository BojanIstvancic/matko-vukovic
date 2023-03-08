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
  list-style: none;
  padding: 10px 0;
`;
const SocialIcon = styled.li``;

const TopBar: React.FC<{}> = () => {
  return (
    <StyledTopBar>
      <Container>
        <SocialIcons>
          <SocialIcon>
            <a
              href="https://www.facebook.com/profile.php?id=100007996877884"
              target="_blank"
            >
              FACEBOK
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="mailto:osmatkov_su@mts.rs" target="_blank" title="e-mail">
              MAIL
            </a>
          </SocialIcon>
        </SocialIcons>
      </Container>
    </StyledTopBar>
  );
};

export default TopBar;
