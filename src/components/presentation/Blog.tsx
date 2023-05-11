import ReactPaginate from "react-paginate";
import BlogPost from "@/components/BlogPost";

import styled from "styled-components";
import { Post } from "../../constants/types";

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
  blogPostsToRender: Post[] | null;
  handlePageClick: (event: any) => void;
  pageCount: number;
}

const Blog: React.FC<BlogProps> = ({
  blogPostsToRender,
  handlePageClick,
  pageCount,
}) => (
  <StyledBlog>
    <h1>Vesti</h1>
    <BlogPostContainer>
      {blogPostsToRender &&
        !!blogPostsToRender.length &&
        blogPostsToRender.map((post) => (
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
);

export default Blog;
