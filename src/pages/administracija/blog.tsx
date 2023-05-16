import { useState, useEffect } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationBlog from "@/components/presentation/AdministrationBlog";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  deleteBlogPostItemAsync,
  getBlogPostItemsAsync,
  selectBlog,
} from "@/features/blog/blogSlice";
import { createBlogPostItem, editBlogPostItem } from "@/api/blog";

import { Post } from "../../constants/types";

const AdnministrationBlogContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(selectBlog);

  useEffect(() => {
    if (!blog.posts) {
      dispatch(getBlogPostItemsAsync());
    }

    setOpenModal(false);
  }, [blog.posts, dispatch]);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<undefined | Post>(undefined);
  const [currentAction, setCurrentAction] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOpenModal = (action: string, id: string | null = null) => {
    const filterCurrentPost = blog.posts?.find((item) => item._id === id);
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
      const response = await createBlogPostItem(data);

      const post = response.data.post;
      const blogPostsWithCreatedItem = [post, ...blogPosts];
      setBlogPosts(blogPostsWithCreatedItem);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPost = async (values: Post) => {
    const data = {
      content: values.content,
      title: values.title,
      post_image: values.image,
    };

    const id = values._id;

    try {
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
  };

  const handleDeletePost = () => {
    dispatch(deleteBlogPostItemAsync(currentPost?._id as string));
  };

  const blogPostsToRender = blog.posts?.filter(
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
        posts={blogPostsToRender}
        handleSearch={handleSearch}
        status={blog.status}
      />
    </Layout>
  );
};

export default AdnministrationBlogContainer;
