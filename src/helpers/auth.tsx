import { useRouter } from "next/router";
import { getCookie } from "./cookieStorage";
import { useEffect } from "react";

export const useAuth = () => {
  const user = getCookie("user");
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/administracija");
    }
  }, [router, user]);

  return user;
};
