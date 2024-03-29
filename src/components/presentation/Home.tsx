import Image from "next/image";
import Link from "next/link";

import Swiper from "../Swiper";
import EventList from "../EventList";

import styled from "styled-components";
import { EventsData, Post } from "../../constants/types";
import { links } from "@/constants/links";

import SwiperImage1 from "/public/images/pages/index/swiper-1.jpg";
import SwiperImage2 from "/public/images/pages/index/swiper-2.jpg";
import SwiperImage3 from "/public/images/pages/index/swiper-3.jpg";
import Loading from "../Loading";
import { API_LOADING_STATUS } from "@/constants/api";

const StyledHome = styled.div``;

const SwiperSection = styled.section`
  position: relative;
  margin-bottom: 20px;

  height: 200px;

  @media (min-width: 1200px) {
    height: 350px;
  }
`;
const SwiperTitle = styled.h1`
  position: absolute;
  bottom: 30px;
  right: 20px;
  margin: 0;

  padding: 10px 20px;
  color: var(--white);
  background-color: var(--primary);
  font-weight: bold;
  border: none;
  z-index: 5;

  @media (max-width: 1200px) {
    font-size: 20px;
    padding: 5px 10px;
  }
`;

const EventsSection = styled.div`
  margin-bottom: 20px;
`;

const BlogPostSection = styled.section`
  margin-bottom: 20px;

  h2 {
    cursor: pointer;
  }
`;
const BlogPostContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  h3 {
    transition: all 0.3s ease 0s;

    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--primary);
    }
  }
`;
const BlogPost = styled.div`
  margin-bottom: 25px;

  @media (min-width: 600px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  @media (min-width: 1000px) {
    margin-right: 25px;
    margin-bottom: 0px;
    flex: 1 1 0%;
    display: block;
    max-width: 345px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
const BlogPostImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  margin-bottom: 25px;

  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 600px) {
    width: 50%;
    max-width: 350px;
    margin-bottom: 0px;
    margin-right: 25px;
    flex-shrink: 0;
  }

  @media (min-width: 1000px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 25px;
  }

  svg {
    position: absolute;
    bottom: 0px;
    right: 0px;
    height: 0%;
    transition: all 0.3s ease 0s;
    pointer-events: none;
  }

  span {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: var(--white);
    opacity: 0;
    transition: opacity 0.3s ease 0s;
    font-size: 20px;
  }

  &:hover,
  &:focus {
    svg {
      height: 100%;
    }

    span {
      opacity: 1;
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const BlogPostContent = styled.div``;

export interface HomeProps {
  posts: Post[] | undefined;
  eventsData: EventsData[];
  status: API_LOADING_STATUS;
  eventsStatus: API_LOADING_STATUS;
}

const Home: React.FC<HomeProps> = ({
  posts,
  status,
  eventsData,
  eventsStatus,
}) => {
  const swiperImages = [SwiperImage1, SwiperImage2, SwiperImage3];
  const eventsToday = !!eventsData[0].events?.length;
  return (
    <StyledHome>
      <SwiperSection>
        <Swiper images={swiperImages} />
        <SwiperTitle>Matko Vuković</SwiperTitle>
      </SwiperSection>
      {eventsToday && (
        <EventsSection>
          <h2>Dešavanja danas</h2>
          <EventList eventsData={eventsData} />
        </EventsSection>
      )}
      <BlogPostSection>
        <Link href={links.news.url}>
          <h2>Vesti</h2>
        </Link>
        <BlogPostContainer>
          {posts &&
            posts.map((item: Post) => (
              <BlogPost key={item._id}>
                <BlogPostImageContainer>
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                    alt={`blog-post-image-${item._id}`}
                  />
                  <svg
                    viewBox="0 0 213 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M197.702 0.522696C87.6182 8.21893 0.704097 99.9596 0.704102 212L197.704 212C205.988 212 212.704 205.284 212.704 197L212.704 15.0001C212.704 6.71581 205.966 -0.0550627 197.702 0.522696Z"
                      fill="url(#1)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="1"
                        x1="20.2041"
                        y1="262.5"
                        x2="221.704"
                        y2="-69"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0F8F8D"></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <Link href={`${links.news.url}/${item._id}`} />
                  <span>Pročitaj</span>
                </BlogPostImageContainer>
                <BlogPostContent>
                  <Link href={`${links.news.url}/${item._id}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.content.substr(0, 95)}...</p>
                </BlogPostContent>
              </BlogPost>
            ))}
          {(status === "loading" || eventsStatus === "loading") && <Loading />}
          {((!posts && status === "failed") || eventsStatus === "failed") && (
            <h3>Doslo je do greske prilikom konekcije na bazu podataka.</h3>
          )}
        </BlogPostContainer>
      </BlogPostSection>
    </StyledHome>
  );
};
export default Home;
