import Link from "next/link";
import styled from "styled-components";
import Container from "./Container";
import Image from "next/image";
import Logo from "/public/images/logo.png";

const StyledHeaderMain = styled.div`
  padding: 30px 0;
`;
const HeaderMainInner = styled.div``;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Info = styled.div`
  margin-top: 20px;
`;
const InfoItem = styled.p`
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  margin-top: 5px;
`;
const Contact = styled.div`
  margin-top: 20px;
`;
const ContacItem = styled(InfoItem)`
  font-size: 13px;
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
            <Link href="/">
              <Image src={Logo} alt="logo" width={150} height={90} />
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
            <ContacItem>
              <i className="fa fa-phone"></i>Pozovite nas +38124/4562-573
            </ContacItem>
            <ContacItem>
              <i className="fa fa-envelope"></i>
              <a href="mailto:osmatkov_su@mts.rs">osmatkov_su@mts.rs</a>
            </ContacItem>
          </Contact>
        </HeaderMainInner>
      </Container>
    </StyledHeaderMain>
  );
};

export default HeaderMain;
