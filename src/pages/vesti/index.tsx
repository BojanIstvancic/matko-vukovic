import { useEffect } from "react";

import Layout from "@/components/Layout";
import Container from "@/components/Container";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  getBlogPostItemsAsync,
  selectBlogForPagination,
  updateBlogItemsPerPage,
} from "@/features/blog/blogSlice";

import Blog from "@/components/presentation/Blog";

const BlogContainer: React.FC<{}> = ({}) => {
  const dispatch = useAppDispatch();
  const { posts, status, pageCount } = useAppSelector(selectBlogForPagination);

  useEffect(() => {
    if (!posts) {
      dispatch(getBlogPostItemsAsync());
    }
  }, [posts, dispatch]);

  const handlePageClick = (event: any) => {
    dispatch(updateBlogItemsPerPage(event.selected));
  };

  return (
    <Layout title={"Matko Vuković | Vesti"} content={"description"}>
      <Container>
        <Blog
          posts={posts}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          status={status}
        />
      </Container>
    </Layout>
  );
};

export default BlogContainer;
