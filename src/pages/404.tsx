import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Error from "@/components/presentation/404";

const ErrorContainer: React.FC<{}> = () => (
  <Layout title={"Matko Vuković | stranica ne postoji"} content={"description"}>
    <Container>
      <Error />
    </Container>
  </Layout>
);

export default ErrorContainer;
