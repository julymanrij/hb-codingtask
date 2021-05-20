import "./styles.css";
import { Link } from "react-router-dom";
import HbInput from "../../components/hbInput";
import HbButton from "../../components/hbButton";
import Logo from "../../components/logo";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState(null);

  const handleError = (message) => {
    setError(message);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const form = document.getElementById("signup");

    if (
      form.elements["password"].value !== form.elements["confirmPassword"].value
    ) {
      handleError("The password confirmation does not match.");
      return;
    }

    const userData = {
      name: form.elements["name"].value,
      phone: form.elements["phone"].value,
      email: form.elements["email"].value,
      password: form.elements["password"].value,
    };

    const userExist = users.filter((user) => user.email === userData.email);

    if (userExist.length) {
      handleError("User already exist.");
    } else {
      localStorage.setItem("users", JSON.stringify([...users, userData]));
      window.location.href = "/";
    }
  };
  return (
    <section
      className="signUp flexColumn container content"
      onSubmit={handleSubmit}
    >
      <Logo />
      <h1>Sign Up</h1>
      <form className="flexColumn" action="" id="signup">
        <HbInput name="name" label="Name" type="text" required={true}></HbInput>
        <HbInput
          name="phone"
          label="Phone"
          type="phone"
          required={false}
        ></HbInput>
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
        <HbInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          required={true}
        ></HbInput>
        {error && <span className="error">{error}</span>}
        <HbButton text="Sign Up" type="submit"></HbButton>
        <Link to="/">Login</Link>
      </form>
    </section>
  );
};

export default SignUp;
