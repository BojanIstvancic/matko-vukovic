import Button from "../../components/Button";
import Loading from "@/components/Loading";
import Form from "../../components/Form";
import StaffItem from "@/components/StaffItem";
import Modal from "@/components/Modal";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPen,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Employee } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";

const StyledAdministrationStaff = styled.div``;
const StaffItemContainer = styled.div`
  position: relative;
`;
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
  grid-gap: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px 20px;
  }
`;
const StaffItemButtonContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
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
  employees: Employee[] | undefined;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  status: API_LOADING_STATUS;
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
  employees,
  handleSearch,
  status,
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
      {employees &&
        employees.map((member: Employee) => (
          <StaffItemContainer key={member._id}>
            <StaffItem item={member} />
            <StaffItemButtonContainer>
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
            </StaffItemButtonContainer>
          </StaffItemContainer>
        ))}
    </StaffContainer>
    <Modal
      openModal={openModal}
      handleCloseModal={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <>
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
      </>
    </Modal>

    {status === "loading" && <Loading />}
  </StyledAdministrationStaff>
);

export default AdministrationStaff;
