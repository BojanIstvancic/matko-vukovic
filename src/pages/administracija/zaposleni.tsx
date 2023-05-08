import Layout from "@/components/administration/Layout";
import Button from "../../components/Button";
import Loading from "@/components/Loading";
import { Modal } from "@mui/material";
import Form from "../../components/Form";
import StaffItem from "@/components/StaffItem";

import { useState } from "react";
import { GetServerSideProps } from "next";
import { apiCall } from "@/api/axios";
import { API_Method, API_URL } from "@/constants/api";
import { Employee } from "@/constants/types";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPen,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const StyledEmployee = styled.div``;
const StaffItemContainer = styled.div``;
const ButtonContainer = styled.div`
  display: flex;

  margin-bottom: 30px;
`;
const EmployeeTextInput = styled.input`
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

export interface StaffProps {
  employees: {
    employees: Employee[];
  };
}

const Staff: React.FC<StaffProps> = ({ employees }) => {
  const [staffMembers, setStaffMembers] = useState<Employee[]>(
    employees.employees
  );
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState<undefined | Employee>(
    undefined
  );
  const [currentAction, setCurrentAction] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOpenModal = (action: string, id: string | null = null) => {
    const filterCurrentEmployee = staffMembers.find((item) => item._id === id);
    setCurrentEmployee(filterCurrentEmployee);

    setCurrentAction(action);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const createEmployee = async (values: Employee) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      staff_image: values.image,
      role: values.role,
    };

    try {
      setIsLoading(true);

      const response = await apiCall(API_URL.EMPLOYEES, API_Method.POST, data);

      const employee = response.data.employee;
      const staffWithNewEmployee = [employee, ...staffMembers];
      setStaffMembers(staffWithNewEmployee);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const editEmployee = async (values: Employee) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      staff_image: values.image,
      role: values.role,
    };

    const param = values._id;

    try {
      setIsLoading(true);

      const response = await apiCall(
        API_URL.EMPLOYEES,
        API_Method.PATCH,
        data,
        param
      );

      const employee = response.data.employee;

      const staffWithEditedEmployee = staffMembers.map((item) =>
        item._id === employee._id ? employee : item
      );

      setStaffMembers(staffWithEditedEmployee);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const handleDeleteEmployee = async () => {
    try {
      setIsLoading(true);

      const response = await apiCall(
        API_URL.EMPLOYEES,
        API_Method.DELETE,
        null,
        currentEmployee?._id
      );

      const employee = response?.data.employee;
      const blogPostsWithoutDeletedItem = staffMembers.filter(
        (item) => item._id !== employee._id
      );
      setStaffMembers(blogPostsWithoutDeletedItem);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Layout title={"Matko Vuković | Zaposleni"} heading={"Zaposleni"}>
      <StyledEmployee>
        <ButtonContainer>
          <EmployeeTextInput
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
          {staffMembers
            .filter(
              (member) =>
                member.firstName.toLowerCase().includes(search.toLowerCase()) ||
                member.lastName.toLowerCase().includes(search.toLowerCase())
            )
            .map((member) => (
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
                handleSubmit={createEmployee}
              />
            )}
            {currentAction === "edit" && (
              <Form
                formName="Modifikuj zaposlenog"
                formType="employee"
                buttonName="Sačuvaj izmene"
                buttonType="edit"
                customInitialValues={currentEmployee}
                handleSubmit={editEmployee}
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
                <Button
                  buttonType="delete"
                  clickFunction={handleDeleteEmployee}
                >
                  Potvrdi
                </Button>
              </>
            )}

            {isLoading && <Loading />}
          </FormContainer>
        </Modal>
      </StyledEmployee>
    </Layout>
  );
};

export default Staff;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await apiCall(API_URL.EMPLOYEES, API_Method.GET);

  const employees = response.data;

  return {
    props: {
      employees,
    },
  };
};
