import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Container from "@/components/Container";
import Home from "@/components/presentation/Home";

import { Post } from "../constants/types";
import { getBlogPostItems } from "../api/blog";

const HomeContainer: React.FC = ({}) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  useEffect(() => {
    // put  this in redux later
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
