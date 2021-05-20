import "./styles.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../logo";
const Nav = (props) => {
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
      </ul>
    </nav>
  );
};

export default Nav;
