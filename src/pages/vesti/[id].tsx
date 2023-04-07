import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

import styled from "styled-components";
import { Post } from "../../../types";
import { API_Method, API_URL } from "../../constants/api";
import { apiCall } from "@/api/axios";

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
  post: {
    post: Post;
  };
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ post }) => {
  const blogPost: Post = post.post;

  return (
    <Layout title={"Matko Vuković | Blog Item"} content={"description"}>
      <Container>
        <StyledBlogPostItem>
          <h1>{blogPost.title}</h1>
          <BlogPostItemImage>
            <Image src={blogPost.image} layout="fill" alt={"blog-post-image"} />
          </BlogPostItemImage>
          <p>{blogPost.content}</p>
        </StyledBlogPostItem>
      </Container>
    </Layout>
  );
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;
  const response = await apiCall(API_URL.POSTS, API_Method.GET, null, id);
  const post = response.data;

  return {
    props: {
      post,
    },
  };
};

export default BlogPostItem;
