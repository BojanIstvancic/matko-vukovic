import Container from "@/components/Container";
import Layout from "@/components/Layout";
import styled from "styled-components";
import ContactImage from "/public/images/pages/kontakt/contact-background.jpg";
import Image from "next/image";

const InfoContainer = styled.div`
  display: flex;

  p + h2 {
    margin-top: 20px;
  }

  p.telephone {
    margin-top: 20px;

    &:last-child {
      margin-bottom: 40px;
    }
  }

  span {
    font-weight: 600;
  }
`;
const Info = styled.div`
  margin-right: 100px;
`;
const InfoImageContainer = styled.div`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);

  display: none;

  @media (min-width: 700px) {
    display: flex;
    align-items: flex-end;
  }
`;

const Contact: React.FC<{}> = () => {
  return (
    <Layout title={"Matko Vuković | Kontakt"} content={"description"}>
      <Container>
        <>
          <h1>Kontakt</h1>
          <InfoContainer>
            <Info>
              <h2>Centralna škola</h2>
              <p>
                <span>Adresa škole:</span>
              </p>
              <p>Ruđera Boškovića 1</p>
              <p>24000 Subotica, Srbija</p>
              <p className="telephone">
                <span>Telefon:</span> +38124/4562-573
              </p>
              <p>
                <span>E-mail: </span>
                <a href="mailto:osmatkov_su@mts.rs">osmatkov_su@mts.rs</a>
              </p>
              <h2>Gat</h2>
              <p>
                <span>Adresa škole:</span>
              </p>
              <p>Ruđera Boškovića 20</p>
              <p>24000 Subotica, Srbija</p>
              <p className="telephone">
                <span>Telefon:</span> +38124/4562-565
              </p>
              <h2>Mali bajmok</h2>
              <p>
                <span>Adresa škole:</span>
              </p>
              <p>Ivana Sarića bb</p>
              <p>24000 Subotica, Srbija</p>
              <p className="telephone">
                <span>Telefon:</span> +38124/562-204
              </p>
            </Info>
            <InfoImageContainer>
              <Image
                src={ContactImage}
                alt="contact"
                width={330}
                height={500}
              />
            </InfoImageContainer>
          </InfoContainer>
        </>
      </Container>
    </Layout>
  );
};

export default Contact;
