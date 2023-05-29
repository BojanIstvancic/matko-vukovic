import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Fun from "@/components/presentation/Fun";
import { useState } from "react";

const FunContainer: React.FC<{}> = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <Layout title={"Matko Vuković | Zabava"} content={"description"}>
      <Container>
        <Fun
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          openModal={openModal}
        />
      </Container>
    </Layout>
  );
};

export default FunContainer;
