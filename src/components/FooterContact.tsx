import styled from "styled-components";

const FooterContactInner = styled.div``;

const Contact = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
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
        <ContactItem style={{ display: "flex" }}>
          <i className="fa fa-map-marker"></i>
          <span>
            OŠ &ldquo;Matko Vuković&ldquo;
            <br />
            Ruđera Boškovića 1, Subotica <br />
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
      </Contact>
    </FooterContactInner>
  );
};

export default FooterContact;
