import { API_LOADING_STATUS } from "@/constants/api";

import styled from "styled-components";
import { Event as EventData } from "@/constants/types";
import Event from "../Event";
import Loading from "../Loading";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";

const StyledEvents = styled.div``;

export interface AdministrationEventsProps {
  events: EventData[] | null;
  status: API_LOADING_STATUS;
}

const EventWrapper = styled.div``;
const EventHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;
const EventDate = styled.p`
  margin-bottom: 0;
  margin-left: 10px;
`;

const AdministrationEvents: React.FC<AdministrationEventsProps> = ({
  events,
  status,
}) => (
  <StyledEvents>
    <h1>Događaji</h1>
    {events &&
      events.map((singleEvent) => {
        const currentDate = new Date(singleEvent.date).toLocaleDateString("nl");

        return (
          <EventWrapper key={singleEvent._id}>
            <EventHeader>
              <Button
                buttonType="delete"
                // clickFunction={() => handleOpenModal("delete", post._id)}
              >
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  style={{ fontSize: 20, color: "white" }}
                />
              </Button>
              <Button
                buttonType="edit"
                // clickFunction={() => handleOpenModal("edit", post._id)}
              >
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ fontSize: 20, color: "white" }}
                />
              </Button>
              <EventDate>{`Datum: ${currentDate}`}</EventDate>
            </EventHeader>
            <Event
              _id={singleEvent._id}
              type={singleEvent.type}
              group={singleEvent.group}
              info={singleEvent.info}
            />
          </EventWrapper>
        );
      })}

    {!events && <h3>Nema unešenih dešavanja.</h3>}

    {status === "loading" && <Loading />}
    {status === "failed" && (
      <h3>Doslo je do greske prilikom konekcije na bazu podataka.</h3>
    )}
  </StyledEvents>
);

export default AdministrationEvents;
