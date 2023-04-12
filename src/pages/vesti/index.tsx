import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Post } from "../../../types";
import { API_Method, API_URL } from "../../constants/api";
import { apiCall } from "@/api/axios";
import { links } from "@/constants/links";

const StyledBlog = styled.div`
  margin-bottom: 25px;
`;

const BlogPostContainer = styled.div`
  margin-bottom: 25px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 20px;
  }
`;
const BlogPost = styled.div`
  height: 100px;
  max-width: 550px;
  margin-bottom: 25px;

  display: flex;
  -webkit-box-align: center;
  align-items: center;

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;
const BlogPostImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 120px;
  flex-shrink: 0;
  margin-right: 25px;

  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 600px) {
    width: 150px;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const BlogPostContent = styled.div`
  h3 {
    transition: all 0.3s ease 0s;
    margin-bottom: 10px;

    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--primary);
    }

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
            {blogPosts &&
              blogPosts
                .slice(itemOffset, itemOffset + itemsPerPage)
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
                      <Link href={`${links.news.url}/${item._id}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.content.substr(0, 95)}...</p>
                    </BlogPostContent>
                  </BlogPost>
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
  const response = await apiCall(API_URL.POSTS, API_Method.GET);

  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
