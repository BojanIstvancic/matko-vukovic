import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import Container from "@/components/Container";

import Blog from "@/components/presentation/Blog";
import { Post } from "../../constants/types";
import { getBlogPostItems } from "@/api/blog";

const BlogContainer: React.FC<{}> = ({}) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  useEffect(() => {
    // put this in redux later
    const fetchData = async () => {
      const response = await getBlogPostItems();

      setBlogPosts(response.data.posts);
    };

    fetchData();
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const itemsLength = blogPosts.length;
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemsLength / itemsPerPage));
  }, [itemOffset, itemsPerPage, itemsLength]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemsLength;
    setItemOffset(newOffset);
  };

  const blogPostsToRender = blogPosts.slice(
    itemOffset,
    itemOffset + itemsPerPage
  );

  return (
    <Layout title={"Matko Vuković | Vesti"} content={"description"}>
      <Container>
        <Blog
          blogPostsToRender={blogPostsToRender}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
        />
      </Container>
    </Layout>
  );
};

export default BlogContainer;
