import { useState, useEffect } from "react";

import Layout from "@/components/AdministrationLayout";
import AdministrationStaff from "@/components/presentation/AdministrationStaff";

import { Employee } from "@/constants/types";
import {
  createEmployee,
  deleteEmployee,
  editEmployee,
  getEmployees,
} from "@/api/employees";

const AdministrationStaffContainer: React.FC = ({}) => {
  // move all these crapy actions to the redux
  const [staffMembers, setStaffMembers] = useState<Employee[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployees();

      setStaffMembers(response.data.employees);
    };

    fetchData();
  }, []);

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

  const handleCreateEmployee = async (values: Employee) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      staff_image: values.image,
      role: values.role,
    };

    try {
      setIsLoading(true);

      const response = await createEmployee(data);

      const employee = response.data.employee;
      const staffWithNewEmployee = [employee, ...staffMembers];
      setStaffMembers(staffWithNewEmployee);

      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const handleEditEmployee = async (values: Employee) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      staff_image: values.image,
      role: values.role,
    };

    const id = values._id;

    try {
      setIsLoading(true);

      const response = await editEmployee(data, id);

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

      const response = await deleteEmployee(currentEmployee?._id);
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

  const staffMembersToRender = staffMembers.filter(
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
        isLoading={isLoading}
        staffMembersToRender={staffMembersToRender}
        handleSearch={handleSearch}
      />
    </Layout>
  );
};

export default AdministrationStaffContainer;
