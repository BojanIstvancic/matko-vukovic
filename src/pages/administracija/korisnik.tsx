import Layout from "@/components/AdministrationLayout";
import { selectUser } from "@/features/user/userSlice";
import { useAppSelector } from "@/hooks";

const AdministrationUserContainer: React.FC = ({}) => {
  const { user } = useAppSelector(selectUser);

  return (
    <Layout title={"Matko Vuković | Korisnik"}>
      <p>{user?.firstName} </p>
      <p>{user?.lastName} </p>
      <p>{user?.administrationLevel} </p>
    </Layout>
  );
};

export default AdministrationUserContainer;
