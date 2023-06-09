import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Events from "@/components/presentation/Events";

import {
  getEventsAsync,
  selectAllEvents,
  selectEvents,
} from "@/features/events/eventsSlice";

const EventsContainer: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { eventsAllData, status } = useAppSelector(selectAllEvents);

  const { events } = useAppSelector(selectEvents);

  useEffect(() => {
    if (!events) {
      dispatch(getEventsAsync());
    }
  }, [events, dispatch]);

  return (
    <Layout title={"Matko Vuković | Dešavanja"} content={"description"}>
      <Container>
        <Events eventsData={eventsAllData} status={status} />
      </Container>
    </Layout>
  );
};

export default EventsContainer;
