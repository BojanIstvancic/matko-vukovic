import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import Container from "@/components/Container";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { getBlogPostItemsAsync, selectBlog } from "@/features/blog/blogSlice";

import Blog from "@/components/presentation/Blog";

import { Post } from "../../constants/types";

const BlogContainer: React.FC<{}> = ({}) => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(selectBlog);

  useEffect(() => {
    if (!blog.posts) {
      dispatch(getBlogPostItemsAsync());
    }
  }, [blog.posts, dispatch]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const itemsLength = blog.posts?.length || 1;
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemsLength / itemsPerPage));
  }, [itemOffset, itemsPerPage, itemsLength]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemsLength;
    setItemOffset(newOffset);
  };

  const blogPostsToRender = blog.posts?.slice(
    itemOffset,
    itemOffset + itemsPerPage
  );

  // REFACTOR THIS AND EXTRACT THIS LOGIC IN SELECTOR
  return (
    <Layout title={"Matko Vuković | Vesti"} content={"description"}>
      <Container>
        <Blog
          posts={blogPostsToRender}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          status={blog.status}
        />
      </Container>
    </Layout>
  );
};

export default BlogContainer;
