import { useEffect } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationEvents from "@/components/presentation/AdministrationEvents";
import {
  getEventsAsync,
  selectEvents,
  selectEventsToday,
} from "@/features/events/eventsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const AdministrationEventsContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { eventsData, status: eventsStatus } =
    useAppSelector(selectEventsToday);
  const { events } = useAppSelector(selectEvents);

  useEffect(() => {
    if (!events) {
      dispatch(getEventsAsync());
    }
  }, [events, dispatch]);

  return (
    <Layout title={"Matko Vuković | Dešavanja"}>
      <AdministrationEvents eventsData={eventsData} status={eventsStatus} />
    </Layout>
  );
};

export default AdministrationEventsContainer;
