import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Layout from "../components/Layout";
import Container from "@/components/Container";
import Home from "@/components/presentation/Home";

import { getBlogPostItemsAsync, selectBlog } from "@/features/blog/blogSlice";

const HomeContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(selectBlog);

  useEffect(() => {
    if (!blog.posts) {
      dispatch(getBlogPostItemsAsync());
    }
  }, [blog.posts, dispatch]);

  return (
    <Layout title={"Matko Vuković | Naslovna"} content={"description"}>
      <Container>
        <Home posts={blog.posts} status={blog.status} />
      </Container>
    </Layout>
  );
};

export default HomeContainer;
