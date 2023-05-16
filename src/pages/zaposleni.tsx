import { useEffect } from "react";

import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Staff from "@/components/presentation/Staff";

import {
  getEmployeesAsync,
  selectEmployees,
} from "@/features/employees/employeesSlice";

import { useAppDispatch, useAppSelector } from "@/hooks";

import {
  Administration,
  EmployeeRoles,
  ProfessionalService,
} from "@/constants/types";

const StaffContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);

  useEffect(() => {
    if (!employees.employees) {
      dispatch(getEmployeesAsync());
    }
  }, [employees.employees, dispatch]);

  // PUT ALL THESE THINGS IN SELECTOR
  const administration = employees.employees?.filter(
    (member) =>
      member.role.includes(Administration.DIRECTOR) ||
      member.role.includes(Administration.SECRETARY) ||
      member.role.includes(Administration.DEPUTY) ||
      member.role.includes(Administration.LAWYER)
  );

  const professionalService = employees.employees?.filter(
    (member) =>
      member.role.includes(ProfessionalService.PEDAGOGUE) ||
      member.role.includes(ProfessionalService.PSYCHOLOGIST)
  );

  const professors = employees.employees?.filter((member) =>
    member.role.includes(EmployeeRoles.PROFESSOR)
  );

  return (
    <Layout title={"Matko Vuković | Zaposleni"} content={"description"}>
      <Container>
        <Staff
          administration={administration}
          professionalService={professionalService}
          professors={professors}
          status={employees.status}
        />
      </Container>
    </Layout>
  );
};

export default StaffContainer;
