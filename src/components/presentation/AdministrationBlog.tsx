import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Loading from "@/components/Loading";
import BlogPost from "@/components/BlogPost";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPen,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { BlogPostData, BlogPostDataWithId, Post } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";

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

export interface AdministrationBlogProps {
  handleCreatePost: (values: BlogPostData) => Promise<void>;
  handleEditPost: (values: BlogPostDataWithId) => Promise<void>;
  handleDeletePost: () => void;
  handleOpenModal: (action: string, id?: string | null) => void;
  handleCloseModal: () => void;
  openModal: boolean;
  currentAction: string;
  currentPost: Post | undefined;
  posts: Post[] | undefined;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  status: API_LOADING_STATUS;
}

const AdministrationBlog: React.FC<AdministrationBlogProps> = ({
  handleCreatePost,
  handleEditPost,
  handleDeletePost,
  handleOpenModal,
  handleCloseModal,
  openModal,
  currentAction,
  currentPost,
  posts,
  handleSearch,
  status,
}) => (
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
      {posts &&
        posts.map((post: Post) => (
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
      openModal={openModal}
      closeModal={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <>
        {currentAction === "add" && (
          <Form
            formName="Napravi nov post"
            formType="post"
            buttonName="Napravi post"
            handleSubmit={handleCreatePost}
          />
        )}
        {currentAction === "edit" && (
          <Form
            formName="Doradi post"
            formType="post"
            buttonName="Sačuvaj izmene"
            buttonType="edit"
            customInitialValues={currentPost}
            handleSubmit={handleEditPost}
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
      </>
    </Modal>
    {status === "loading" && <Loading />}
  </StyledBlog>
);

export default AdministrationBlog;
