import { API_LOADING_STATUS } from "@/constants/api";

import styled from "styled-components";
import { Event as EventData } from "@/constants/types";
import Event from "../Event";
import Loading from "../Loading";

const StyledEvents = styled.div``;

export interface AdministrationEventsProps {
  events: EventData[] | null;
  status: API_LOADING_STATUS;
}

const AdministrationEvents: React.FC<AdministrationEventsProps> = ({
  events,
  status,
}) => (
  <StyledEvents>
    <h1>Događaji</h1>
    {events &&
      events.map((singleEvent) => (
        <Event
          key={singleEvent._id}
          _id={singleEvent._id}
          type={singleEvent.type}
          group={singleEvent.group}
          info={singleEvent.info}
          date={singleEvent.date}
        />
      ))}

    {!events && <h3>Nema unešenih dešavanja.</h3>}

    {status === "loading" && <Loading />}
    {status === "failed" && (
      <h3>Doslo je do greske prilikom konekcije na bazu podataka.</h3>
    )}
  </StyledEvents>
);

export default AdministrationEvents;
