import Container from "@/components/Container";
import Layout from "@/components/Layout";

const News: React.FC<{}> = () => {
  return (
    <Layout title={"Matko Vuković | Vesti"} content={"description"}>
      <Container>
        <h1>Vesti</h1>
      </Container>
    </Layout>
  );
};

export default News;
