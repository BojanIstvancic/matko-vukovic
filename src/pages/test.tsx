import Layout from "@/components/Layout";
import Container from "@/components/Container";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

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
const Event = styled.div`
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

const EventList = styled.div``;

const EventListHeader = styled.div`
  margin-bottom: 10px;
  border-bottom: 2px solir var(--primary);
`;
const EventListHeaderContent = styled.div`
  display: inline-flex;
  padding: 10px;
  background: var(--primary);
`;
const EventListHeaderText = styled.p`
  margin-left: 10px;
  color: var(--white);
  text-transform: uppercase;
`;

const TestContainer: React.FC<{}> = () => {
  const eventsData = [
    {
      date: "sreda, 07.jun 2023",
      events: [
        {
          id: 1,
          type: "exam",
          group: "8c",
          text: "Test iz matematika koji obuhvata tri poglavlja: sabiranje, oduzimanje, množenje.",
        },
        {
          id: 2,
          type: "info",
          group: "all",
          text: "Danas ce biti organizovana priredba za prijem prvaka u školi u Malom Bajmoku.",
        },
        {
          id: 3,
          type: "dayOff",
          group: "all",
          text: "Zbog standardnih praznika za odmor, dani 01. - 04. Maj će biti neradni. Sa nastavom se redovno nastavlja 05. Maja u ponedeljak.",
        },
      ],
    },
    {
      date: "četvrtak, 08.jun 2023",
      events: [
        {
          id: 4,
          type: "exam",
          group: "1c",
          text: "Test na temu lektira - Mali Princ.",
        },
        {
          id: 5,
          type: "info",
          group: "all",
          text: "Danas ce 1. razredi škole u Malom Bajmoku ići u ZOO VRT.",
        },
        {
          id: 6,
          type: "dayOff",
          group: "all",
          text: "Zbog standardnih praznika za odmor, dani 01. - 04. Maj će biti neradni. Sa nastavom se redovno nastavlja 05. Maja u ponedeljak.",
        },
      ],
    },
  ];

  const eventTypeLabels = {
    info: "Informacija",
    dayOff: "Neradni dan",
    exam: "Provera znanja",
  };

  return (
    <Layout title={"Matko Vuković | O školi"} content={"description"}>
      <Container>
        <>
          <h2>Dešavanja</h2>
          {eventsData.map((event, key) => (
            <EventList key={key}>
              <EventListHeader>
                <EventListHeaderContent>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ fontSize: 20, color: "white" }}
                  />
                  <EventListHeaderText>{event.date}</EventListHeaderText>
                </EventListHeaderContent>
              </EventListHeader>
              {event.events.map((singleEvent) => (
                <Event key={singleEvent.id} className={singleEvent.type}>
                  <EventInfo>
                    {singleEvent.group === "all" ? "svi" : singleEvent.group}
                  </EventInfo>
                  <EventBody>
                    <EventTitle>{eventTypeLabels[singleEvent.type]}</EventTitle>
                    <EvenText>{singleEvent.text}</EvenText>
                  </EventBody>
                </Event>
              ))}
            </EventList>
          ))}
        </>
      </Container>
    </Layout>
  );
};

export default TestContainer;
