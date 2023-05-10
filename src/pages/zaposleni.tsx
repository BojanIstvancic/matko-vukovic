import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Staff from "../components/presentation/Staff";
import { GetServerSideProps } from "next";

import {
  Administration,
  Employee,
  EmployeeRoles,
  ProfessionalService,
} from "@/constants/types";

import { getEmployees } from "@/api/employees";
import { useEffect, useState } from "react";

const StaffContainer: React.FC = () => {
  const [staffMembers, setStaffMembers] = useState<Employee[]>([]);
  // move all this code to reducer
  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployees();

      setStaffMembers(response.data.employees);
    };

    fetchData();
  }, []);

  const administration = staffMembers.filter(
    (member) =>
      member.role.includes(Administration.DIRECTOR) ||
      member.role.includes(Administration.SECRETARY) ||
      member.role.includes(Administration.DEPUTY) ||
      member.role.includes(Administration.LAWYER)
  );

  const professionalService = staffMembers.filter(
    (member) =>
      member.role.includes(ProfessionalService.PEDAGOGUE) ||
      member.role.includes(ProfessionalService.PSYCHOLOGIST)
  );

  const professors = staffMembers.filter((member) =>
    member.role.includes(EmployeeRoles.PROFESSOR)
  );

  return (
    <Layout title={"Matko Vuković | Zaposleni"} content={"description"}>
      <Container>
        <Staff
          administration={administration}
          professionalService={professionalService}
          professors={professors}
        />
      </Container>
    </Layout>
  );
};

export default StaffContainer;
