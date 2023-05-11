import { useState, useEffect } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationBlog from "@/components/presentation/AdministrationBlog";

import { Post } from "../../constants/types";

import styled from "styled-components";
import {
  createBlogPostItem,
  deleteBlogPostItem,
  editBlogPostItem,
  getBlogPostItems,
} from "@/api/blog";

const AdnministrationBlogContainer: React.FC = ({}) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<undefined | Post>(undefined);
  const [currentAction, setCurrentAction] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBlogPostItems();

      setBlogPosts(response.data.posts);
    };

    fetchData();
  }, []);

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

  const handleCreatePost = async (values: Post) => {
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

  const handleEditPost = async (values: Post) => {
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

  const blogPostsToRender = blogPosts.filter(
    (post: Post) =>
      post.content.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout title={"Matko Vuković | Blog"}>
      <AdministrationBlog
        handleCreatePost={handleCreatePost}
        handleEditPost={handleEditPost}
        handleDeletePost={handleDeletePost}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        currentAction={currentAction}
        currentPost={currentPost}
        isLoading={isLoading}
        blogPostsToRender={blogPostsToRender}
        handleSearch={handleSearch}
      />
    </Layout>
  );
};

export default AdnministrationBlogContainer;
