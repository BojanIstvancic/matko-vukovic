import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";

import styled from "styled-components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const StyledSwiper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
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

interface SwiperProps {
  images: StaticImageData[];
}

const SwiperComponent: React.FC<SwiperProps> = ({ images }) => {
  return (
    <StyledSwiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`swiper-image-${index}`} layout="fill" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiper>
  );
};

export default SwiperComponent;
