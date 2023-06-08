import Link from "next/link";

import { links } from "@/constants/links";
import styled from "styled-components";
import { EventsData } from "@/constants/types";
import EventList from "../EventList";

const StyledEvents = styled.div`
  padding-bottom: 20px;
`;

export interface EventsProps {
  eventsData: EventsData[];
}

const Events: React.FC<EventsProps> = ({ eventsData }) => (
  <StyledEvents>
    <h1>Događaji</h1>
    <Link href={links.index.url} passHref>
      <EventList eventsData={eventsData} />
    </Link>
  </StyledEvents>
);

export default Events;
