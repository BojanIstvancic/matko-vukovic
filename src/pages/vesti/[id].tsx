import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  getBlogPostItemAsync,
  selectBlogItem,
} from "@/features/blogItem/blogItemSlice";

import Layout from "@/components/Layout";
import Container from "@/components/Container";

import BlogPostItem from "@/components/presentation/BlogItem";

const BlogPostItemContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { post, status } = useAppSelector(selectBlogItem);

  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    if (id !== undefined && post?._id !== id) {
      dispatch(getBlogPostItemAsync(id));
    }
  }, [post, dispatch, id]);

  return (
    <Layout title={"Matko Vuković | Blog"} content={"description"}>
      <Container>
        <BlogPostItem post={post} status={status} />
      </Container>
    </Layout>
  );
};

export default BlogPostItemContainer;
