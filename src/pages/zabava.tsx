import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Fun from "@/components/presentation/Fun";

import { generateSolution } from "@/helpers/generateSolution";

const FunContainer: React.FC<{}> = () => {
  const solutions = ["domar", "basan", "vesti", "krilo", "avion"];
  const solution = generateSolution(solutions);

  return (
    <Layout title={"Matko Vuković | Zabava"} content={"description"}>
      <Container>
        <Fun solution={solution} />
      </Container>
    </Layout>
  );
};

export default FunContainer;
