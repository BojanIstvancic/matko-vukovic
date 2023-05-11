import Button from "../../components/Button";
import Loading from "@/components/Loading";
import Form from "../../components/Form";
import StaffItem from "@/components/StaffItem";
import { Modal } from "@mui/material";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPen,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Employee } from "@/constants/types";

const StyledAdministrationStaff = styled.div``;
const StaffItemContainer = styled.div``;
const ButtonContainer = styled.div`
  display: flex;

  margin-bottom: 30px;
`;
const StaffTextInput = styled.input`
  margin-right: 25px;
`;

const StaffContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
  }
`;
const StaffItemFooter = styled.div`
  display: flex;
  justify-content: center;
`;
const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: var(--white);

  &:not(.delete) {
    width: 50%;
    min-width: 300px;
    max-width: 500px;
  }

  h3 span {
    color: var(--primary);
    font-weight: bold;
  }
`;

export interface AdministrationStaffProps {
  handleCreateEmployee: (values: Employee) => Promise<void>;
  handleEditEmployee: (values: Employee) => Promise<void>;
  handleDeleteEmployee: () => Promise<void>;
  handleOpenModal: (action: string, id?: string | null) => void;
  handleCloseModal: () => void;
  openModal: boolean;
  currentAction: string;
  currentEmployee: Employee | undefined;
  isLoading: boolean;
  staffMembersToRender: Employee[];
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const AdministrationStaff: React.FC<AdministrationStaffProps> = ({
  handleCreateEmployee,
  handleEditEmployee,
  handleDeleteEmployee,
  handleOpenModal,
  handleCloseModal,
  openModal,
  currentAction,
  currentEmployee,
  isLoading,
  staffMembersToRender,
  handleSearch,
  search,
}) => (
  <StyledAdministrationStaff>
    <ButtonContainer>
      <StaffTextInput
        placeholder="Pronađi zaposlenog"
        onChange={handleSearch}
      />
      <Button clickFunction={() => handleOpenModal("add")}>
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ fontSize: 20, color: "white" }}
        />
      </Button>
    </ButtonContainer>
    <StaffContainer>
      {staffMembersToRender.map((member: Employee) => (
        <StaffItemContainer key={member._id}>
          <StaffItem item={member} />
          <StaffItemFooter>
            <Button
              buttonType="delete"
              clickFunction={() => handleOpenModal("delete", member._id)}
            >
              <FontAwesomeIcon
                icon={faCircleMinus}
                style={{ fontSize: 20, color: "white" }}
              />
            </Button>
            <Button
              buttonType="edit"
              clickFunction={() => handleOpenModal("edit", member._id)}
            >
              <FontAwesomeIcon
                icon={faPen}
                style={{ fontSize: 20, color: "white" }}
              />
            </Button>
          </StaffItemFooter>
        </StaffItemContainer>
      ))}
    </StaffContainer>
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <FormContainer className={currentAction}>
        {currentAction === "add" && (
          <Form
            formName="Napravi novog zaposlenog"
            formType="employee"
            buttonName="Napravi zaposlenog"
            handleSubmit={handleCreateEmployee}
          />
        )}
        {currentAction === "edit" && (
          <Form
            formName="Modifikuj zaposlenog"
            formType="employee"
            buttonName="Sačuvaj izmene"
            buttonType="edit"
            customInitialValues={currentEmployee}
            handleSubmit={handleEditEmployee}
          />
        )}

        {currentAction === "delete" && (
          <>
            <h3>
              Potvrdite brisanje zaposlenog{" "}
              <span>
                {currentEmployee?.firstName} {currentEmployee?.lastName}
              </span>
            </h3>
            <Button buttonType="delete" clickFunction={handleDeleteEmployee}>
              Potvrdi
            </Button>
          </>
        )}

        {isLoading && <Loading />}
      </FormContainer>
    </Modal>
  </StyledAdministrationStaff>
);

export default AdministrationStaff;
