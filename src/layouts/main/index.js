import "./styles.css";
import Nav from "../../components/nav";

const MainLayout = (props) => {
  return (
    <section className="mainLayout">
      <Nav/>
      <section className="body container">
        <section className="content">{props.children}</section>
      </section>
    </section>
  );
};

export default MainLayout;
