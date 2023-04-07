import { useRouter } from "next/router";
import { getCookie } from "./cookieStorage";
import { useEffect } from "react";

export const useAuth = () => {
  const token = getCookie("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/administracija");
    }
  }, [router, token]);
};
