import useForm from "../hooks/formHooks";
import { useAuthentication } from "../hooks/apiHooks";

const LoginForm = () => {
  const { postLogin } = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    console.log(inputs);
    // TODO: add login functionalities here
    const result = await postLogin(inputs);
    localStorage.setItem('token', result.token);
    console.log("Result: ", result);
    console.log("Token: ", result.token);

  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doLogin, initValues);

  console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
