import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";

interface SwiperProps {
  images: StaticImageData[];
}

const SwiperComponent: React.FC<SwiperProps> = ({ images }) => {
  return (
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
  );
};

export default SwiperComponent;
