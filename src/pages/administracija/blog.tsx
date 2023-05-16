import { useState, useEffect } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationBlog from "@/components/presentation/AdministrationBlog";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  createBlogPostItemAsync,
  deleteBlogPostItemAsync,
  editBlogPostitemAsync,
  getBlogPostItemsAsync,
  selectBlog,
} from "@/features/blog/blogSlice";

import { BlogPostData, Post } from "../../constants/types";

const AdnministrationBlogContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(selectBlog);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<undefined | Post>(undefined);
  const [currentAction, setCurrentAction] = useState("");

  useEffect(() => {
    if (!blog.posts) {
      dispatch(getBlogPostItemsAsync());
    }

    setOpenModal(false);
  }, [blog.posts, dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // add debounce to this search function
    setSearch(event.target.value);
  };

  const handleOpenModal = (action: string, id: string | null = null) => {
    const filterCurrentPost = blog.posts?.find((item) => item._id === id);
    setCurrentPost(filterCurrentPost);

    setCurrentAction(action);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleCreatePost = async (values: BlogPostData) => {
    const data = {
      content: values.content,
      title: values.title,
      image: values.image,
    };

    dispatch(createBlogPostItemAsync(data));
  };

  const handleEditPost = async (values: BlogPostData) => {
    const data = {
      id: currentPost?._id as string,
      content: values.content,
      title: values.title,
      image: values.image,
    };

    dispatch(editBlogPostitemAsync(data));
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
