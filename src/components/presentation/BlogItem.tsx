import Image from "next/image";

import Loading from "../Loading";

import styled from "styled-components";
import { Post } from "../../constants/types";
import { API_LOADING_STATUS } from "@/constants/api";

const StyledBlogPostItem = styled.div`
  margin-bottom: 25px;
`;
const BlogPostItemImage = styled(Image)`
  position: relative;
  margin-bottom: 30px;

  height: auto;
  width: 100%;

  max-width: 550px;
`;

export interface BlogPostItemProps {
  post: Post | null;
  status: API_LOADING_STATUS;
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ post, status }) => (
  <StyledBlogPostItem>
    {post && Object.keys(post).length !== 0 && (
      <>
        <h1>{post.title}</h1>
        <BlogPostItemImage
          src={post.image}
          width={0}
          height={0}
          sizes="100vw"
          alt={"blog-post-image"}
        />
        <p>{post.content}</p>
      </>
    )}
    {status === "loading" && <Loading />}
    {status === "failed" && <h1>Trazeni post ne postoji</h1>}
  </StyledBlogPostItem>
);

export default BlogPostItem;
