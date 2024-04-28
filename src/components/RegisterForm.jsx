import useForm from "../hooks/formHooks";
import { useUser } from "../hooks/apiHooks";

const RegisterForm = () => {
  const { postRegister } = useUser();
  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const doRegister = async () => {
    console.log("doRegister", inputs);
    try {
      const userData = await postRegister(inputs);
      console.log("userData: ", userData);
    } catch (error) {
      alert(error.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doRegister, initValues);

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
