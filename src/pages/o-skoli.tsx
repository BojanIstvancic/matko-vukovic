import Layout from "@/components/Layout";
import Container from "@/components/Container";
import AboutUs from "@/components/presentation/AboutUs";

const AboutUsContainer: React.FC<{}> = () => (
  <Layout title={"Matko Vuković | O školi"} content={"description"}>
    <Container>
      <AboutUs />
    </Container>
  </Layout>
);

export default AboutUsContainer;
