import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Contact from "@/components/presentation/Contact";

const ContactContainer: React.FC<{}> = () => {
  return (
    <Layout title={"Matko Vuković | Kontakt"} content={"description"}>
      <Container>
        <Contact />
      </Container>
    </Layout>
  );
};

export default ContactContainer;
