import Layout from "@/components/administration/Layout";
import Button from "../../components/Button";
import Image from "next/image";

import { useState } from "react";
import { GetServerSideProps } from "next";
import { apiCall } from "@/api/axios";
import { API_Method, API_URL } from "@/constants/api";
import { Employee } from "@/constants/types";
import { staffRoles } from "@/constants/helpers";

import Portrait from "/public/images/portrait.png";

import styled from "styled-components";

const StyledEmployee = styled.div``;
const ButtonContainer = styled.div`
  display: flex;

  margin-bottom: 30px;
`;
const EmployeeTextInput = styled.input`
  margin-right: 25px;
`;

export interface StaffProps {
  employees: {
    employees: Employee[];
  };
}

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 40px;
  }
`;
const Item = styled.div`
  text-align: center;
`;
const ItemImage = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
const ItemName = styled.p`
  font-weight: bold;
`;
const ItemRole = styled.p``;

const Staff: React.FC<StaffProps> = ({ employees }) => {
  const staffMembers: Employee[] = employees.employees;
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

  return (
    <Layout title={"Matko Vuković | Zaposleni"} heading={"Zaposleni"}>
      <StyledEmployee>
        <ButtonContainer>
          <EmployeeTextInput
            placeholder="Pronađi zaposlenog"
            onChange={handleSearch}
          />
          <Button clickFunction={() => handleOpenModal("add")}>
            Napravi novog zaposlenog
          </Button>
        </ButtonContainer>
        <ItemContainer>
          {staffMembers
            .filter(
              (member) =>
                member.firstName.toLowerCase().includes(search.toLowerCase()) ||
                member.lastName.toLowerCase().includes(search.toLowerCase())
            )
            .map((member) => (
              <Item key={member._id}>
                <ItemImage>
                  <Image
                    src={member.image || Portrait}
                    alt={member.firstName}
                    width={640}
                    height={639}
                  />
                </ItemImage>
                <ItemName>{`${member.firstName} ${member.lastName}`}</ItemName>
                <ItemRole>{staffRoles[member.role]}</ItemRole>
              </Item>
            ))}
        </ItemContainer>
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
