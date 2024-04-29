import { useEffect } from "react";
import { useUserContext } from "../hooks/ContextHooks";

const HandleAutoLogin = () => {
  const { handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return null;
}

export default HandleAutoLogin;
