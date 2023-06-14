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
  Library,
  ProfessionalService,
  Support,
} from "@/constants/types";

const StaffContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { employees, status } = useAppSelector(selectEmployees);

  useEffect(() => {
    if (!employees) {
      dispatch(getEmployeesAsync());
    }
  }, [employees, dispatch]);

  // PUT ALL THESE THINGS IN SELECTOR
  const administration = employees?.filter(
    (member) =>
      member.role.includes(Administration.DIRECTOR) ||
      member.role.includes(Administration.SECRETARY) ||
      member.role.includes(Administration.DEPUTY) ||
      member.role.includes(Administration.LAWYER)
  );

  const professionalService = employees?.filter(
    (member) =>
      member.role.includes(ProfessionalService.PEDAGOGUE) ||
      member.role.includes(ProfessionalService.PSYCHOLOGIST)
  );

  const professors = employees?.filter((member) =>
    member.role.includes(EmployeeRoles.PROFESSOR)
  );

  const support = employees?.filter(
    (member) =>
      member.role.includes(Support.CLEANER) ||
      member.role.includes(Support.JANITOR)
  );

  const library = employees?.filter((member) =>
    member.role.includes(Library.LIBRARIAN)
  );

  return (
    <Layout title={"Matko Vuković | Zaposleni"} content={"description"}>
      <Container>
        <Staff
          administration={administration}
          professionalService={professionalService}
          professors={professors}
          support={support}
          library={library}
          status={status}
        />
      </Container>
    </Layout>
  );
};

export default StaffContainer;
