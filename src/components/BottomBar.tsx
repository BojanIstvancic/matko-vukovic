import styled from "styled-components";
import Container from "./Container";

const StyledBottomBar = styled.div`
  background-color: var(--gray-500);

  p {
    font-size: 11px;
  }
`;
const BottomBarInner = styled.div`
  padding: 10px 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;

  margin-top: 15px;
  list-style: none;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const SocialIcon = styled.li`
  margin-right: 20px;
`;
const SocialIconLink = styled.a`
  border-radius: 50%;

  i {
    font-size: 18px;
    color: var(--gray-300);
  }

  &:hover {
    transition: all 500ms ease;

    i {
      color: var(--white);
    }
  }
`;

const BottomBar: React.FC<{}> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledBottomBar>
      <Container>
        <BottomBarInner>
          <p>Copyright @ {currentYear} Matko Vuković Subotica</p>
          <SocialIcons>
            <SocialIcon>
              <SocialIconLink
                href="https://www.facebook.com/profile.php?id=100007996877884"
                target="_blank"
              >
                <i
                  className="fa fa-facebook"
                  aria-hidden="true"
                  title="facebook"
                ></i>
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
        </BottomBarInner>
      </Container>
    </StyledBottomBar>
  );
};

export default BottomBar;
