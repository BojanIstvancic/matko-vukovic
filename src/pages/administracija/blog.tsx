import Layout from "@/components/administration/Layout";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

import { Post } from "../../../types";
import { GetServerSideProps } from "next";
import { apiCall } from "@/api/axios";
import { API_Method, API_URL } from "@/constants/api";

import styled from "styled-components";

const StyledBlog = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

export interface BlogProps {
  posts: {
    posts: Post[];
  };
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const blogPosts: Post[] = posts.posts;
  console.log(blogPosts);
  return (
    <Layout title={"Matko Vuković | Blog"} heading={"Blog"}>
      <StyledBlog>
        <ButtonContainer>
          <TextField
            name="search"
            label="Pronađi post"
            type="text"
            id="search"
            sx={{
              flexGrow: 1,
              maxWidth: 600,
              marginRight: 3,
            }}
          />
          <Button text="Dodaj post" variant="contained" />
        </ButtonContainer>
      </StyledBlog>
    </Layout>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await apiCall(API_URL.POSTS, API_Method.GET);

  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
};
