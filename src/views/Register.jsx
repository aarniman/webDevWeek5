import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <RegisterForm />
      <Link to="/login">Log In</Link>
    </>
  );
};

export default Register;
