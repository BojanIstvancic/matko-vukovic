import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  getBlogPostItemAsync,
  selectBlogItem,
} from "@/features/blogItem/blogItemSlice";

import Layout from "@/components/Layout";
import Container from "@/components/Container";

import { getBlogPostItem } from "@/api/blog";
import BlogPostItem from "@/components/presentation/BlogItem";
import { Post } from "@/constants/types";

const BlogPostItemContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const blogItem = useAppSelector(selectBlogItem);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (!blogItem.post || blogItem.post._id !== id) {
      dispatch(getBlogPostItemAsync(id));
      // FIX THIS PROBLEM
      // create status interface
    }
  }, [blogItem.post, dispatch, id]);

  return (
    <Layout title={"Matko Vuković | Blog"} content={"description"}>
      <Container>
        <BlogPostItem post={blogItem.post} status={blogItem.status} />
      </Container>
    </Layout>
  );
};

export default BlogPostItemContainer;
