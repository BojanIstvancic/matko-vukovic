import { links } from "@/constants/links";
import { Post } from "@/constants/types";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledBlogPost = styled.div`
  height: 100px;
  max-width: 550px;
  margin-bottom: 25px;

  display: flex;
  -webkit-box-align: center;
  align-posts: center;

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;
const BlogPostImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 120px;
  flex-shrink: 0;
  margin-right: 25px;

  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 600px) {
    width: 150px;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const BlogPostContent = styled.div`
  h3 {
    transition: all 0.3s ease 0s;
    margin-bottom: 10px;

    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--primary);
    }

    @media (max-width: 599px) {
      font-size: 16px;
    }
  }

  p {
    @media (max-width: 599px) {
      display: none;
    }
  }
`;

export interface BlogPostprops {
  post: Post;
}

const BlogPost: React.FC<BlogPostprops> = ({ post }) => (
  <StyledBlogPost key={post._id}>
    <BlogPostImageContainer>
      <Image
        src={post.image}
        layout="fill"
        alt={`blog-post-image-${post._id}`}
      />
      <a href={`${links.news.url}/${post._id}`} />
    </BlogPostImageContainer>
    <BlogPostContent>
      <Link href={`${links.news.url}/${post._id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.content.substr(0, 95)}...</p>
    </BlogPostContent>
  </StyledBlogPost>
);

export default BlogPost;
