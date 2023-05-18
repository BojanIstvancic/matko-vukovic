import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import Container from "@/components/Container";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { getBlogPostItemsAsync, selectBlog } from "@/features/blog/blogSlice";

import Blog from "@/components/presentation/Blog";

const BlogContainer: React.FC<{}> = ({}) => {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector(selectBlog);

  useEffect(() => {
    if (!posts) {
      dispatch(getBlogPostItemsAsync());
    }
  }, [posts, dispatch]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const itemsLength = posts?.length || 1;
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemsLength / itemsPerPage));
  }, [itemOffset, itemsPerPage, itemsLength]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemsLength;
    setItemOffset(newOffset);
  };

  const blogPostsToRender = posts?.slice(itemOffset, itemOffset + itemsPerPage);

  // REFACTOR THIS AND EXTRACT THIS LOGIC IN SELECTOR
  return (
    <Layout title={"Matko Vuković | Vesti"} content={"description"}>
      <Container>
        <Blog
          posts={blogPostsToRender}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          status={status}
        />
      </Container>
    </Layout>
  );
};

export default BlogContainer;
