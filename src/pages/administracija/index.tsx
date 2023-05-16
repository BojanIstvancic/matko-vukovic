import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loginUserAsync, selectUser } from "@/features/user/userSlice";

import Layout from "@/components/Layout";
import Container from "@/components/Container";
import AdministrationLogin from "@/components/presentation/AdministrationLogin";

import { loginFormValues } from "@/utils/forms";
import { links } from "@/constants/links";
import { getCookie } from "@/helpers/cookieStorage";

const AdministrationLoginContainer: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const router = useRouter();

  const token = getCookie("token");

  if (token) {
    router.push(links.administrationBlog.url);
  }

  const handleSubmit = async ({ name, password }: loginFormValues) => {
    const data = {
      name,
      password,
    };

    dispatch(loginUserAsync(data));
  };

  return (
    <Layout title={"Matko Vuković | Uloguj se"} content="uloguj se">
      <Container>
        <AdministrationLogin handleSubmit={handleSubmit} status={user.status} />
      </Container>
    </Layout>
  );
};

export default AdministrationLoginContainer;
