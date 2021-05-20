import "./styles.css";
import { Link } from "react-router-dom";
import HbInput from "../../components/hbInput";
import HbButton from "../../components/hbButton";
import Logo from "../../components/logo";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(null);
  const handleError = (message) => {
    setError(message);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const form = document.getElementById("login");
    const userData = {
      email: form.elements["email"].value,
      password: form.elements["password"].value,
    };
    const userExist = users.filter((user) => user.email === userData.email);
    if (userExist.length) {
      if (userExist[0].password === userData.password) {
        sessionStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "/";
      } else {
        handleError("Wrong password");
      }
    } else {
      handleError("User do not exist.");
    }
  };
  return (
    <section className="login flexColumn container content">
      <Logo />
      <h1>Login</h1>
      <form
        id="login"
        className="flexColumn"
        action="#"
        onSubmit={handleSubmit}
      >
        <HbInput
          name="email"
          label="Email"
          type="email"
          required={true}
        ></HbInput>
        <HbInput
          name="password"
          label="Password"
          type="password"
          required={true}
        ></HbInput>
        {error && <span className="error">{error}</span>}
        <HbButton text="login" type="submit"></HbButton>
        <Link to="sign-up">Sign Up</Link>
      </form>
    </section>
  );
};

export default Login;
