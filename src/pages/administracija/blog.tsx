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

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-width: 300px;
  padding: 20px;
  background-color: var(--white);
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
  const [currentPost, setCurrentPost] = useState<undefined | Post>(undefined);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOpenModal = (id: string | null = null) => {
    setOpenModal(true);
    const filterCurrentPost = blogPosts.find((item) => item._id === id);
    setCurrentPost(filterCurrentPost);
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
          <Button variant="contained" onClick={() => handleOpenModal()}>
            Dodaj post
          </Button>
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
                  variant="contained"
                  className="edit"
                  onClick={() => handleOpenModal(item._id)}
                >
                  <>Modifikuj post</>
                </Button>
              </BlogPost>
            ))}
        </BlogPostContainer>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <FormContainer>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              name="title"
              label="Naslov"
              autoFocus
              defaultValue={currentPost?.title}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="content"
              name="content"
              label="Tekst"
              multiline
              maxRows={8}
              autoComplete="password"
              defaultValue={currentPost?.content}
            />
            <Image
              src={currentPost?.image}
              width={400}
              height={200}
              alt={`blog-post-image-${currentPost?._id}`}
              style={{ marginBottom: "20px" }}
            />
            <br />
            <Button variant="contained" component="label">
              <>
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </>
            </Button>
          </FormContainer>
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
