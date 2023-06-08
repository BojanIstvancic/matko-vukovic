import { Event } from "@/constants/types";
import styled from "styled-components";

const EventInfo = styled.div`
  width: 70px;
  flex-shrink: 0;
  margin-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  text-transform: uppercase;
`;
const EventBody = styled.div`
  padding: 10px 0;
`;
const EventTitle = styled.h3`
  margin-bottom: 10px;
`;
const EvenText = styled.p`
  margin-bottom: 0;
`;
const StyledEvent = styled.div`
  display: flex;
  margin-bottom: 10px;

  &.exam {
    ${EventInfo} {
      background: var(--red-500);
      color: var(--white);
    }

    ${EventTitle} {
      color: var(--red-500);
    }
  }

  &.info {
    ${EventInfo} {
      background: var(--yellow-600);
      color: var(--white);
    }

    ${EventTitle} {
      color: var(--yellow-600);
    }
  }

  &.dayOff {
    ${EventInfo} {
      background: var(--gray-300);
      color: var(--white);
    }

    ${EventTitle} {
      color: var(--gray-300);
    }
  }
`;

const EventRow: React.FC<Event> = ({ id, type, group, text }) => {
  const eventTypeLabels = {
    info: "Informacija",
    dayOff: "Neradni dan",
    exam: "Provera znanja",
  };

  return (
    <StyledEvent key={id} className={type}>
      <EventInfo>{group === "all" ? "svi" : group}</EventInfo>
      <EventBody>
        <EventTitle>{eventTypeLabels[type]}</EventTitle>
        <EvenText>{text}</EvenText>
      </EventBody>
    </StyledEvent>
  );
};

export default EventRow;
