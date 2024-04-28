import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <LoginForm />
      <Link to="/register" as="button">Register</Link>
    </>
  );
};

export default Login;
