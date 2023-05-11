import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

import styled from "styled-components";

import Logo from "/public/images/logo.png";
import { links } from "../constants/links";

const StyledHeaderMain = styled.div`
  padding: 30px 0;
`;
const HeaderMainInner = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Info = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 40px;
  }
`;
const InfoItem = styled.p`
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  margin-top: 5px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
const Contact = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const ContactItem = styled(InfoItem)`
  i {
    margin-right: 10px;
    color: var(--primary);
  }
`;

const HeaderMain: React.FC<{}> = () => {
  return (
    <StyledHeaderMain>
      <Container>
        <HeaderMainInner>
          <InfoContainer>
            <Link href={links.index.url} passHref>
              <a>
                <Image src={Logo} alt="logo" width={150} height={90} />
              </a>
            </Link>
            <Info>
              <InfoItem>
                Основна школа &ldquo;Матко Вуковић&ldquo; Суботица
              </InfoItem>
              <InfoItem>
                Osnovna škola &ldquo;Matko Vuković&ldquo; Subotica
              </InfoItem>
              <InfoItem>
                Általános Iskola &ldquo;Matko Vuković&ldquo; Szabadka
              </InfoItem>
            </Info>
          </InfoContainer>
          <Contact>
            <ContactItem>
              <i className="fa fa-phone"></i>Pozovite nas +38124/4562-573
            </ContactItem>
            <ContactItem>
              <i className="fa fa-envelope"></i>
              <a href="mailto:osmatkov_su@mts.rs">osmatkov_su@mts.rs</a>
            </ContactItem>
          </Contact>
        </HeaderMainInner>
      </Container>
    </StyledHeaderMain>
  );
};

export default HeaderMain;
