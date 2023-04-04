import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import SwiperImage1 from "/public/images/pages/index/swiper-1.jpg";

import styled from "styled-components";

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

export interface Post {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/posts/`);
  const posts = await res.json();

  const paths = posts.posts.map((post: any) => {
    return {
      params: { id: post._id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const res = await fetch(`http://localhost:3000/api/v1/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export default BlogPostItem;
