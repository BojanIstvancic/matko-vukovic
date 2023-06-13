import { API_LOADING_STATUS } from "@/constants/api";

import styled from "styled-components";
import { EventsData } from "@/constants/types";
import EventList from "../EventList";
import Loading from "../Loading";

const StyledEvents = styled.div``;

export interface AdministrationEventsProps {
  eventsData: EventsData[];
  status: API_LOADING_STATUS;
}

const AdministrationEvents: React.FC<AdministrationEventsProps> = ({
  eventsData,
  status,
}) => (
  <StyledEvents>
    <h1>Događaji</h1>
    <EventList eventsData={eventsData} />

    {!eventsData.length && <h3>Nema unešenih dešavanja.</h3>}

    {status === "loading" && <Loading />}
    {status === "failed" && (
      <h3>Doslo je do greske prilikom konekcije na bazu podataka.</h3>
    )}
  </StyledEvents>
);

export default AdministrationEvents;
