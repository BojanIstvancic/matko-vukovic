import Layout from "@/components/administration/Layout";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

import { Post } from "../../../types";
import { GetServerSideProps } from "next";
import { apiCall } from "@/api/axios";
import { API_Method, API_URL } from "@/constants/api";

import styled from "styled-components";
import Image from "next/image";
import { links } from "@/constants/links";
import { useState } from "react";
import { Modal } from "@mui/material";

const StyledBlog = styled.div``;

const ButtonContainer = styled.div`
  display: flex;

  margin-bottom: 30px;
`;

const BlogPostContainer = styled.div`
  margin-bottom: 25px;
`;
const BlogPost = styled.div`
  height: 100px;
  margin-bottom: 25px;

  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const BlogPostImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 120px;
  flex-shrink: 0;
  margin-right: 25px;

  border-radius: 15px;
  overflow: hidden;

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const BlogPostContent = styled.div`
  margin-right: 25px;
  flex: 1;

  h3 {
    margin-bottom: 10px;

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

export interface BlogProps {
  posts: {
    posts: Post[];
  };
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const blogPosts: Post[] = posts.posts;
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<null | string>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOpenModal = (id: string | null = null) => {
    setOpenModal(true);
    setCurrentPost(id);
  };

  const handleCloseModal = () => setOpenModal(false);

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
            onChange={handleSearch}
          />
          <Button
            text="Dodaj post"
            variant="contained"
            onClick={() => handleOpenModal()}
          />
        </ButtonContainer>
        <BlogPostContainer>
          {blogPosts
            .filter(
              (item) =>
                item.content.toLowerCase().includes(search.toLowerCase()) ||
                item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <BlogPost key={item._id}>
                <BlogPostImageContainer>
                  <Image
                    src={item.image}
                    layout="fill"
                    alt={`blog-post-image-${item._id}`}
                  />
                  <a href={`${links.news.url}/${item._id}`} />
                </BlogPostImageContainer>
                <BlogPostContent>
                  <h3>{item.title}</h3>
                  <p>{item.content.substr(0, 100)}...</p>
                </BlogPostContent>
                <Button
                  text="Modifikuj post"
                  variant="contained"
                  className="edit"
                  onClick={() => handleOpenModal(item._id)}
                />
              </BlogPost>
            ))}
        </BlogPostContainer>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <>{currentPost ? <p>ima post</p> : <p>Nema post</p>}</>
        </Modal>
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
