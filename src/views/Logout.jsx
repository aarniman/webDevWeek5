import { useUserContext } from "../hooks/ContextHooks";

const Logout = () => {
  const { handleLogout } = useUserContext();

  try {
    handleLogout();
  } catch (e) {
    console.log(e.message);
  }

  return (
    <div>
      <h1>You have been logged out</h1>
    </div>
  );
};

export default Logout;
