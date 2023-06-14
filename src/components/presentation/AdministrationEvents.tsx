import Event from "../Event";
import Loading from "../Loading";
import Button from "../Button";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Event as EventData } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";

const StyledEvents = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`;
const ButtonLabel = styled.p`
  margin-right: 25px;
`;

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

export interface AdministrationEventsProps {
  handleCreateEvent: (values: any) => Promise<void>;
  handleOpenModal: (action: string, id?: string | null) => void;
  handleCloseModal: () => void;
  handleDeleteEvent: () => void;
  openModal: boolean;
  currentEvent: EventData | undefined;
  currentAction: string;
  events: EventData[] | null;
  status: API_LOADING_STATUS;
}

const AdministrationEvents: React.FC<AdministrationEventsProps> = ({
  handleCreateEvent,
  handleOpenModal,
  handleCloseModal,
  handleDeleteEvent,
  openModal,
  currentEvent,
  currentAction,
  events,
  status,
}) => (
  <StyledEvents>
    <h1>Događaji</h1>
    <ButtonContainer>
      <ButtonLabel>Dodaj novi događaj: </ButtonLabel>
      <Button clickFunction={() => handleOpenModal("add")}>
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ fontSize: 20, color: "white" }}
        />
      </Button>
    </ButtonContainer>
    {events &&
      events.map((singleEvent) => {
        const currentDate = new Date(singleEvent.date).toLocaleDateString("nl");

        return (
          <EventWrapper key={singleEvent._id}>
            <EventHeader>
              <Button
                buttonType="delete"
                clickFunction={() => handleOpenModal("delete", singleEvent._id)}
              >
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  style={{ fontSize: 20, color: "white" }}
                />
              </Button>
              <Button
                buttonType="edit"
                clickFunction={() => handleOpenModal("edit", singleEvent._id)}
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

    <Modal
      openModal={openModal}
      handleCloseModal={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <>
        {currentAction === "add" && (
          <Form
            formName="Napravi novi događaj"
            formType="event"
            buttonName="Napravi događaj"
            handleSubmit={handleCreateEvent}
          />
        )}
        {/* {currentAction === "edit" && (
          <Form
            formName="Doradi post"
            formType="post"
            buttonName="Sačuvaj izmene"
            buttonType="edit"
            customInitialValues={currentPost}
            handleSubmit={handleEditPost}
          />
        )} */}

        {currentAction === "delete" && (
          <>
            <h3>
              Potvrdite brisanje događaja <span>{currentEvent?.info}</span>
            </h3>
            <Button buttonType="delete" clickFunction={handleDeleteEvent}>
              Potvrdi
            </Button>
          </>
        )}
      </>
    </Modal>

    {!events && <h3>Nema unešenih dešavanja.</h3>}

    {status === "loading" && <Loading />}
    {status === "failed" && (
      <h3>Doslo je do greske prilikom konekcije na bazu podataka.</h3>
    )}
  </StyledEvents>
);

export default AdministrationEvents;
