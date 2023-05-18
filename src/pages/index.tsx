import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Layout from "../components/Layout";
import Container from "@/components/Container";
import Home from "@/components/presentation/Home";

import {
  getBlogPostItemsAsync,
  selectBlogThreeItems,
} from "@/features/blog/blogSlice";

const HomeContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector(selectBlogThreeItems);

  useEffect(() => {
    if (!posts) {
      dispatch(getBlogPostItemsAsync());
    }
  }, [posts, dispatch]);

  return (
    <Layout title={"Matko Vuković | Naslovna"} content={"description"}>
      <Container>
        <Home posts={posts} status={status} />
      </Container>
    </Layout>
  );
};

export default HomeContainer;
