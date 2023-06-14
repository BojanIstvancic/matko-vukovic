import { useEffect } from "react";

import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Staff from "@/components/presentation/Staff";

import {
  getEmployeesAsync,
  selectEmployees,
  selectEmployesSortedByRoles,
} from "@/features/employees/employeesSlice";

import { useAppDispatch, useAppSelector } from "@/hooks";

const StaffContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { employees, status } = useAppSelector(selectEmployees);
  const { administration, professionalService, professors, support, library } =
    useAppSelector(selectEmployesSortedByRoles);

  useEffect(() => {
    if (!employees) {
      dispatch(getEmployeesAsync());
    }
  }, [employees, dispatch]);

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
