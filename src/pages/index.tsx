import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Layout from "../components/Layout";
import Container from "@/components/Container";
import Home from "@/components/presentation/Home";

import {
  getBlogPostItemsAsync,
  selectBlogThreeItems,
} from "@/features/blog/blogSlice";
import {
  getEventsAsync,
  selectEvents,
  selectEventsToday,
} from "@/features/events/eventsSlice";

const HomeContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector(selectBlogThreeItems);
  const { eventsData, status: eventsStatus } =
    useAppSelector(selectEventsToday);
  const { events } = useAppSelector(selectEvents);

  useEffect(() => {
    if (!posts) {
      dispatch(getBlogPostItemsAsync());
    }

    if (!events) {
      dispatch(getEventsAsync());
    }
  }, [posts, events, dispatch]);
  return (
    <Layout title={"Matko Vuković | Naslovna"} content={"description"}>
      <Container>
        <Home
          posts={posts}
          status={status}
          eventsData={eventsData}
          eventsStatus={eventsStatus}
        />
      </Container>
    </Layout>
  );
};

export default HomeContainer;
