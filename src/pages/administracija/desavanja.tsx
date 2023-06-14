import { useEffect, useState } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationEvents from "@/components/presentation/AdministrationEvents";
import {
  createEventAsync,
  deleteEventAsync,
  editEventAsync,
  getEventsAsync,
  selectEvents,
} from "@/features/events/eventsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Event, EventData } from "@/constants/types";

const AdministrationEventsContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { events, status } = useAppSelector(selectEvents);
  const [openModal, setOpenModal] = useState(false);
  const [currentEvent, setcurrentEvent] = useState<undefined | Event>(
    undefined
  );
  const [currentAction, setCurrentAction] = useState("");

  useEffect(() => {
    if (!events) {
      dispatch(getEventsAsync());
    }

    setOpenModal(false);
  }, [events, dispatch]);

  const handleOpenModal = (action: string, id: string | null = null) => {
    const filterCurrentEvent = events?.find((event) => event._id === id);
    setcurrentEvent(filterCurrentEvent);

    setCurrentAction(action);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleCreateEvent = async (values: EventData) => {
    const data = {
      type: values.type,
      date: values.date,
      info: values.info,
      group: values.group,
    };

    dispatch(createEventAsync(data));
  };

  const handleEditEvent = async (values: EventData) => {
    const data = {
      id: currentEvent?._id as string,
      type: values.type,
      date: values.date,
      info: values.info,
      group: values.group,
    };

    dispatch(editEventAsync(data));
  };

  const handleDeleteEvent = () => {
    dispatch(deleteEventAsync(currentEvent?._id as string));
  };

  return (
    <Layout title={"Matko Vuković | Dešavanja"}>
      <AdministrationEvents
        handleCreateEvent={handleCreateEvent}
        handleEditEvent={handleEditEvent}
        handleDeleteEvent={handleDeleteEvent}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        currentAction={currentAction}
        currentEvent={currentEvent}
        events={events}
        status={status}
      />
    </Layout>
  );
};

export default AdministrationEventsContainer;
