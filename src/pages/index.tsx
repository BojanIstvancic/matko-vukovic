import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Container from "@/components/Container";

import SwiperImage1 from "/public/images/pages/index/swiper-1.jpg";
import SwiperImage2 from "/public/images/pages/index/swiper-2.jpg";
import SwiperImage3 from "/public/images/pages/index/swiper-3.jpg";

import { Post } from "../constants/types";
import { getBlogPostItems } from "../api/blog";
import Home from "@/components/presentation/Home";

const HomeContainer: React.FC = ({}) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBlogPostItems("limit=3");

      setBlogPosts(response.data.posts);
    };

    fetchData();
  }, []);

  return (
    <Layout title={"Matko Vuković | Naslovna"} content={"description"}>
      <Container>
        <Home blogPosts={blogPosts} />
      </Container>
    </Layout>
  );
};

export default HomeContainer;
