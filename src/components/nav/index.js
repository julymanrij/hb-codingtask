import "./styles.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../logo";
import HbButton from "../hbButton";
const Nav = (props) => {
  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    window.location.href = "/";
  };
  return (
    <nav className="container">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/list-repositories" exact activeClassName="active">
            List Repositories
          </NavLink>
        </li>
        <li>
          <HbButton type="submit" text="LogOut" onclick={logOut}></HbButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
