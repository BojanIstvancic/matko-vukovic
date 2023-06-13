import Link from "next/link";

import { links } from "@/constants/links";
import styled from "styled-components";
import { EventsData } from "@/constants/types";
import EventList from "../EventList";
import { API_LOADING_STATUS } from "@/constants/api";
import Loading from "../Loading";

const StyledEvents = styled.div`
  padding-bottom: 20px;
`;

export interface EventsProps {
  eventsData: EventsData[];
  status: API_LOADING_STATUS;
}

const Events: React.FC<EventsProps> = ({ eventsData, status }) => (
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

export default Events;
