import Layout from "@/components/administration/Layout";
import Button from "../../components/Button";
import { Modal } from "@mui/material";
import Form from "../../components/Form";
import Loading from "@/components/Loading";

import { Post } from "../../constants/types";
import { GetServerSideProps } from "next";
import { apiCall } from "@/api/axios";
import { API_Method, API_URL } from "@/constants/api";

import styled from "styled-components";
import Image from "next/image";
import { links } from "@/constants/links";
import { useState } from "react";

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

const BlogTextInput = styled.input`
  margin-right: 25px;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: var(--white);

  &:not(.delete) {
    width: 50%;
    min-width: 300px;
  }

  span {
    color: var(--primary);
    font-weight: bold;
  }
`;

export interface BlogProps {
  posts: {
    posts: Post[];
  };
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>(posts.posts);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<undefined | Post>(undefined);
  const [currentAction, setCurrentAction] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOpenModal = (action: string, id: string | null = null) => {
    const filterCurrentPost = blogPosts.find((item) => item._id === id);
    setCurrentPost(filterCurrentPost);

    setCurrentAction(action);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const createPost = async (values: Post) => {
    const data = {
      content: values.content,
      title: values.title,
      post_image: values.image,
    };

    try {
      setIsLoading(true);

      const response = await apiCall(API_URL.POSTS, API_Method.POST, data);

      const post = response.data.post;
      const blogPostsWithCreatedItem = [post, ...blogPosts];
      setBlogPosts(blogPostsWithCreatedItem);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const editPost = async (values: Post) => {
    const data = {
      content: values.content,
      title: values.title,
      post_image: values.image,
    };

    const param = values._id;

    try {
      setIsLoading(true);

      const response = await apiCall(
        API_URL.POSTS,
        API_Method.PATCH,
        data,
        param
      );

      const post = response.data.post;

      const blogPostsWithEditeddItem = blogPosts.map((item) =>
        item._id === post._id ? post : item
      );

      setBlogPosts(blogPostsWithEditeddItem);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const handleDeletePost = async () => {
    try {
      setIsLoading(true);

      const response = await apiCall(
        API_URL.POSTS,
        API_Method.DELETE,
        null,
        currentPost?._id
      );

      const post = response?.data.post;
      const blogPostsWithoutDeletedItem = blogPosts.filter(
        (item) => item._id !== post._id
      );
      setBlogPosts(blogPostsWithoutDeletedItem);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Layout title={"Matko Vuković | Blog"} heading={"Blog"}>
      <StyledBlog>
        <ButtonContainer>
          <BlogTextInput placeholder="Pronađi post" onChange={handleSearch} />
          <Button clickFunction={() => handleOpenModal("add")}>
            Napravi nov post
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
                  buttonType="delete"
                  clickFunction={() => handleOpenModal("delete", item._id)}
                >
                  Obrisi
                </Button>
                <Button
                  buttonType="edit"
                  clickFunction={() => handleOpenModal("edit", item._id)}
                >
                  Modifikuj
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
          <FormContainer className={currentAction}>
            {currentAction === "add" && (
              <Form
                formName="Napravi nov post"
                formType="addPost"
                buttonName="Napravi post"
                handleSubmit={createPost}
              />
            )}
            {currentAction === "edit" && (
              <Form
                formName="Doradi post"
                formType="editPost"
                buttonName="Sačuvaj izmene"
                buttonType="edit"
                customInitialValues={currentPost}
                handleSubmit={editPost}
              />
            )}

            {currentAction === "delete" && (
              <>
                <h3>
                  Potvrdite brisanje posta <span>{currentPost?.title}</span>
                </h3>
                <Button buttonType="delete" clickFunction={handleDeletePost}>
                  Potvrdi
                </Button>
              </>
            )}

            {isLoading && <Loading />}
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
