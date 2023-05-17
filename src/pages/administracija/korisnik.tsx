import { useEffect } from "react";
import { getUserAsync, selectUser } from "@/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

import Layout from "@/components/AdministrationLayout";
import AdministrationUser from "@/components/presentation/AdministrationUser";
const AdministrationUserContainer: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { user, status } = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) {
      dispatch(getUserAsync());
    }
  }, [user, dispatch]);

  return (
    <Layout title={"Matko Vuković | Korisnik"}>
      <AdministrationUser user={user} status={status} />
    </Layout>
  );
};

export default AdministrationUserContainer;
