import { useState } from "react";

import Layout from "@/components/AdministrationLayout";
import Button from "../../components/Button";
import { Modal } from "@mui/material";
import Form from "../../components/Form";
import Loading from "@/components/Loading";
import BlogPost from "@/components/BlogPost";

import { Post } from "../../constants/types";
import { GetServerSideProps } from "next";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPen,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  createBlogPostItem,
  deleteBlogPostItem,
  editBlogPostItem,
  getBlogPostItems,
} from "@/api/blog";

const StyledBlog = styled.div``;

const ButtonContainer = styled.div`
  display: flex;

  margin-bottom: 30px;
`;

const BlogPostContainer = styled.div`
  margin-bottom: 25px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
const BlogPostInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const BlogPostButtonContainer = styled.div`
  margin-right: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

  h3 span {
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

      const response = await createBlogPostItem(data);

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

    const id = values._id;

    try {
      setIsLoading(true);

      const response = await editBlogPostItem(data, id);

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

      const response = await deleteBlogPostItem(currentPost?._id);

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
    <Layout title={"Matko Vuković | Blog"}>
      <StyledBlog>
        <ButtonContainer>
          <BlogTextInput placeholder="Pronađi post" onChange={handleSearch} />
          <Button clickFunction={() => handleOpenModal("add")}>
            <FontAwesomeIcon
              icon={faCirclePlus}
              style={{ fontSize: 20, color: "white" }}
            />
          </Button>
        </ButtonContainer>
        <BlogPostContainer>
          {blogPosts
            .filter(
              (post) =>
                post.content.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((post) => (
              <BlogPostInnerWrapper key={post._id}>
                <BlogPostButtonContainer>
                  <Button
                    buttonType="delete"
                    clickFunction={() => handleOpenModal("delete", post._id)}
                  >
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </Button>
                  <Button
                    buttonType="edit"
                    clickFunction={() => handleOpenModal("edit", post._id)}
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </Button>
                </BlogPostButtonContainer>
                <BlogPost post={post} />
              </BlogPostInnerWrapper>
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
                formType="post"
                buttonName="Napravi post"
                handleSubmit={createPost}
              />
            )}
            {currentAction === "edit" && (
              <Form
                formName="Doradi post"
                formType="post"
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
  const response = await getBlogPostItems();

  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
};
