import { useState, useEffect } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationStaff from "@/components/presentation/AdministrationStaff";

import { Employee, EmployeeData } from "@/constants/types";
import { deleteEmployee, editEmployee } from "@/api/employees";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  createEmployeeAsync,
  deleteEmployeeAsync,
  editEmployeeAsync,
  getEmployeesAsync,
  selectEmployees,
} from "@/features/employees/employeesSlice";

const AdministrationStaffContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState<undefined | Employee>(
    undefined
  );
  const [currentAction, setCurrentAction] = useState("");

  useEffect(() => {
    if (!employees.employees) {
      dispatch(getEmployeesAsync());
    }

    setOpenModal(false);
  }, [employees.employees, dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // add debounce here
    setSearch(event.target.value);
  };

  const handleOpenModal = (action: string, id: string | null = null) => {
    const filterCurrentEmployee = employees.employees?.find(
      (item) => item._id === id
    );
    setCurrentEmployee(filterCurrentEmployee);

    setCurrentAction(action);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleCreateEmployee = async (values: EmployeeData) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      image: values.image,
      role: values.role,
    };

    dispatch(createEmployeeAsync(data));
  };

  const handleEditEmployee = async (values: Employee) => {
    const data = {
      id: currentEmployee?._id as string,
      firstName: values.firstName,
      lastName: values.lastName,
      image: values.image,
      role: values.role,
    };

    dispatch(editEmployeeAsync(data));
  };

  const handleDeleteEmployee = async () => {
    dispatch(deleteEmployeeAsync(currentEmployee?._id as string));
  };

  const staffMembersToRender = employees.employees?.filter(
    (member: Employee) =>
      member.firstName.toLowerCase().includes(search.toLowerCase()) ||
      member.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout title={"Matko Vuković | Zaposleni"}>
      <AdministrationStaff
        handleCreateEmployee={handleCreateEmployee}
        handleEditEmployee={handleEditEmployee}
        handleDeleteEmployee={handleDeleteEmployee}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        currentAction={currentAction}
        currentEmployee={currentEmployee}
        employees={staffMembersToRender}
        handleSearch={handleSearch}
        status={employees.status}
      />
    </Layout>
  );
};

export default AdministrationStaffContainer;
