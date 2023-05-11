import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import Container from "@/components/Container";

import { getBlogPostItem } from "@/api/blog";
import BlogPostItem from "@/components/presentation/BlogItem";
import { Post } from "@/constants/types";

const BlogPostItemContainer: React.FC = ({}) => {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    // put this in redux later
    const fetchData = async () => {
      const response = await getBlogPostItem(id);

      setPost(response.data.post);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <Layout title={"Matko Vuković | Blog"} content={"description"}>
      <Container>
        <BlogPostItem post={post} />
      </Container>
    </Layout>
  );
};

export default BlogPostItemContainer;
