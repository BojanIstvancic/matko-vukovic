import Image from "next/image";

import styled from "styled-components";
import { Post } from "../../constants/types";

const StyledBlogPostItem = styled.div`
  margin-bottom: 25px;
`;
const BlogPostItemImage = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    height: 600px;
  }
`;

export interface BlogPostItemProps {
  post: Post | null;
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ post }) => (
  <StyledBlogPostItem>
    {post && Object.keys(post).length !== 0 && (
      <>
        <h1>{post.title}</h1>
        <BlogPostItemImage>
          <Image src={post.image} layout="fill" alt={"blog-post-image"} />
        </BlogPostItemImage>
        <p>{post.content}</p>
      </>
    )}
  </StyledBlogPostItem>
);

export default BlogPostItem;
