import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import Container from "@/components/Container";
import AdministrationLogin from "@/components/presentation/AdministrationLogin";

import { setCookie, getCookie } from "@/helpers/cookieStorage";
import { loginUser } from "@/api/login";
import { loginFormValues } from "@/utils/forms";
import { links } from "@/constants/links";

const Login: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);

  const handleSubmit = async ({ name, password }: loginFormValues) => {
    // move this logic to redux
    try {
      setIsLoading(true);

      const data = {
        name,
        password,
      };

      const response = await loginUser(data);

      setCookie("token", response.data.token, 7);

      router.push(links.administrationBlog.url);
    } catch (e) {
      setDisplayErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      router.push(links.administrationBlog.url);
    }
  }, [router]);

  return (
    <Layout title={"Matko Vuković | Uloguj se"} content="uloguj se">
      <Container>
        <AdministrationLogin
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          displayErrorMessage={displayErrorMessage}
        />
      </Container>
    </Layout>
  );
};

export default Login;
