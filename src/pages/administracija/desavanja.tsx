import { useEffect } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationEvents from "@/components/presentation/AdministrationEvents";
import { getEventsAsync, selectEvents } from "@/features/events/eventsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const AdministrationEventsContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { events, status } = useAppSelector(selectEvents);

  useEffect(() => {
    if (!events) {
      dispatch(getEventsAsync());
    }
  }, [events, dispatch]);

  return (
    <Layout title={"Matko Vuković | Dešavanja"}>
      <AdministrationEvents events={events} status={status} />
    </Layout>
  );
};

export default AdministrationEventsContainer;
