import { useEffect, useState } from "react";
import { getUserAsync, selectUser } from "@/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Layout from "@/components/AdministrationLayout";
import AdministrationUser from "@/components/presentation/AdministrationUser";
import { getUsers } from "./usersAPI";
import { API_LOADING_STATUS } from "@/constants/api";
import { User } from "@/constants/types";

const AdministrationUserContainer: React.FC = ({}) => {
  const [usersStatus, setUsersStatus] = useState<API_LOADING_STATUS>("idle");
  const [users, setUsers] = useState<User[] | null>(null);

  const dispatch = useAppDispatch();
  const { user, status } = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) {
      dispatch(getUserAsync());
    }

    const fetchUsers = async () => {
      setUsersStatus("loading");

      try {
        const response = await getUsers();
        setUsers(response.data.users);
        setUsersStatus("idle");
      } catch {
        setUsersStatus("failed");
      }
    };

    if (user?.administrationLevel !== "basic") {
      fetchUsers();
    }
  }, [user, dispatch]);

  return (
    <Layout title={"Matko Vuković | Korisnik"}>
      <AdministrationUser
        user={user}
        status={status}
        users={users}
        usersStatus={usersStatus}
      />
    </Layout>
  );
};

export default AdministrationUserContainer;
