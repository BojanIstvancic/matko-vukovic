import Container from "@/components/Container";
import Layout from "@/components/Layout";
import ReactPaginate from "react-paginate";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Post } from "../../constants/types";
import BlogPost from "@/components/BlogPost";
import { getBlogPostItems } from "@/api/blog";

const StyledBlog = styled.div`
  margin-bottom: 25px;
`;

const BlogPostContainer = styled.div`
  margin-bottom: 25px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

const PaginationContainer = styled.div`
  .pagination {
    display: flex;

    padding-left: 0;

    list-style: none;
  }

  .page-link {
    position: relative;
    display: block;

    padding: 0.375rem 0.75rem;

    color: var(--primary);
    text-decoration: none;
    background-color: var(--white);
    border: 1px solid var(--gray-250);
    cursor: pointer;

    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      background-color: var(--gray-200);
      border-color: var(--gray-250);
      z-index: 2;
    }
  }

  .page-item.active .page-link {
    color: var(--white);
    background-color: var(--primary);
    border-color: var(--primary);
    z-index: 3;
  }

  @media (max-width: 599px) {
    .page-item {
      &:first-child,
      &:last-child {
        display: none;
      }
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

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const itemsLength = blogPosts.length;
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemsLength / itemsPerPage));
  }, [itemOffset, itemsPerPage, itemsLength]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemsLength;
    setItemOffset(newOffset);
  };

  return (
    <Layout title={"Matko Vuković | Vesti"} content={"description"}>
      <Container>
        <StyledBlog>
          <h1>Vesti</h1>
          <BlogPostContainer>
            {blogPosts
              .slice(itemOffset, itemOffset + itemsPerPage)
              .map((post) => (
                <BlogPost key={post._id} post={post} />
              ))}
          </BlogPostContainer>
          <PaginationContainer>
            <ReactPaginate
              nextLabel="Sledeća >"
              previousLabel="< Prethodna"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </PaginationContainer>
        </StyledBlog>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getBlogPostItems();

  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
