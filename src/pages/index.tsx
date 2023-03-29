import Container from "@/components/Container";
import Layout from "../components/Layout";
import Swiper from "../components/Swiper";

import SwiperImage1 from "/public/images/pages/index/swiper-1.jpg";
import SwiperImage2 from "/public/images/pages/index/swiper-2.jpg";
import SwiperImage3 from "/public/images/pages/index/swiper-3.jpg";

import styled from "styled-components";

const StyledHome = styled.div``;

const SwiperSection = styled.section`
  position: relative;
  margin-bottom: 20px;

  height: 200px;

  @media (min-width: 1200px) {
    height: 350px;
  }
`;

const Home: React.FC<{}> = () => {
  const swiperImages = [SwiperImage1, SwiperImage2, SwiperImage3];

  return (
    <Layout title={"Matko Vuković | Naslovna"} content={"description"}>
      <Container>
        <StyledHome>
          <SwiperSection>
            <Swiper images={swiperImages} />
          </SwiperSection>
        </StyledHome>
      </Container>
    </Layout>
  );
};

export default Home;
