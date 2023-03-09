import styled from "styled-components";

const FooterContactInner = styled.div``;

const Contact = styled.div`
  @media (min-width: 500px) {
    display: flex;
  }

  h4 {
    color: var(--gray-300);
  }
`;
const ContactBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (min-width: 600px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 40px;
    }
  }
`;
const ContactItem = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-top: 10px;
  color: var(--white);

  i {
    margin-right: 10px;
    color: var(--gray-350);
  }
`;

const FooterContact: React.FC<{}> = () => {
  return (
    <FooterContactInner>
      <h3>Kontakt</h3>
      <Contact>
        <ContactBlock>
          <h4>Centralna Skola</h4>
          <ContactItem style={{ display: "flex" }}>
            <i className="fa fa-map-marker"></i>
            <span>
              OŠ &ldquo;Matko Vuković&ldquo;
              <br />
              Ruđera Boškovića 1 <br />
              24000 Subotica, Srbija
            </span>
          </ContactItem>
          <ContactItem>
            <i className="fa fa-phone"></i>+38124/4562-573
          </ContactItem>
          <ContactItem>
            <i className="fa fa-envelope"></i>
            <a href="mailto:osmatkov_su@mts.rs">osmatkov_su@mts.rs</a>
          </ContactItem>
        </ContactBlock>
        <ContactBlock>
          <h4>Gat</h4>
          <ContactItem style={{ display: "flex" }}>
            <i className="fa fa-map-marker"></i>
            <span>
              OŠ &ldquo;Matko Vuković&ldquo;
              <br />
              Ruđera Boškovića 20 <br />
              24000 Subotica, Srbija
            </span>
          </ContactItem>
          <ContactItem>
            <i className="fa fa-phone"></i>+38124/4562-565
          </ContactItem>
        </ContactBlock>
        <ContactBlock>
          <h4>Mali Bajmok</h4>
          <ContactItem style={{ display: "flex" }}>
            <i className="fa fa-map-marker"></i>
            <span>
              OŠ &ldquo;Matko Vuković&ldquo;
              <br />
              Ivana Sarića bb <br />
              24000 Subotica, Srbija
            </span>
          </ContactItem>
          <ContactItem>
            <i className="fa fa-phone"></i>+38124/562-204
          </ContactItem>
        </ContactBlock>
      </Contact>
    </FooterContactInner>
  );
};

export default FooterContact;
