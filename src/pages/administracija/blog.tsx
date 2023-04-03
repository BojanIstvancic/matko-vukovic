import Layout from "@/components/administration/Layout";
import Navigation from "@/components/administration/Navigation";

import styled from "styled-components";

const StyledBlog = styled.div``;

const Blog: React.FC<{}> = () => {
  return (
    <Layout title={"Matko Vuković | Blog"} heading={"Blog"}>
      <StyledBlog>
        <p>Blog</p>
      </StyledBlog>
    </Layout>
  );
};

export default Blog;
