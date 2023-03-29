import Container from "@/components/Container";
import Layout from "../components/Layout";
import Swiper from "../components/Swiper";

import SwiperImage1 from "/public/images/pages/index/swiper-1.jpg";
import SwiperImage2 from "/public/images/pages/index/swiper-2.jpg";
import SwiperImage3 from "/public/images/pages/index/swiper-3.jpg";

import styled from "styled-components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const StyledHome = styled.div``;

const SwiperSection = styled.section`
  width: 100%;
  margin-bottom: 20px;

  .swiper {
    width: 100%;
    height: 350px;
  }

  .swiper-slide {
    position: relative;
  }

  .swiper-pagination-bullet {
    background: var(--primary);
  }

  .swiper-button-next,
  .swiper-button-prev {
    &:after {
      color: var(--primary);
    }
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
