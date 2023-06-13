import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Event from "@/components/Event";

import styled from "styled-components";
import { EventsData } from "@/constants/types";

const StyledEventList = styled.div``;
const List = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid var(--gray-250);
`;

const ListHeader = styled.div`
  margin-bottom: 10px;
  border-bottom: 2px solir var(--primary);
`;
const ListHeaderContent = styled.div`
  display: inline-flex;
  padding: 10px;
  background: var(--primary);
`;
const ListHeaderText = styled.p`
  margin-left: 10px;
  color: var(--white);
  text-transform: uppercase;
`;

export interface EventListProps {
  eventsData: EventsData[];
}

const EventList: React.FC<EventListProps> = ({ eventsData }) => (
  <StyledEventList>
    {eventsData.map((event, key) => (
      <List key={key}>
        <ListHeader>
          <ListHeaderContent>
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ fontSize: 20, color: "white" }}
            />
            <ListHeaderText>{event.date}</ListHeaderText>
          </ListHeaderContent>
        </ListHeader>
        {event.events &&
          event.events.map((singleEvent) => (
            <Event
              key={singleEvent._id}
              _id={singleEvent._id}
              type={singleEvent.type}
              group={singleEvent.group}
              info={singleEvent.info}
            />
          ))}
      </List>
    ))}
  </StyledEventList>
);

export default EventList;
