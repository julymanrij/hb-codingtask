import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Layouts
import MainLayout from "./layouts/main";
// Containers
import Login from "./containers/login";
import SignUp from "./containers/signUp";
import Profile from "./containers/profile";
import ListRepositories from "./containers/listRepositories";
import { useEffect, useState } from "react";

const HelloBuildRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Switch>
        {loggedIn && (
          <Route path={["/list-repositories", "/"]}>
            <MainLayout>
              <Switch>
                <Route
                  path="/list-repositories"
                  exact
                  component={ListRepositories}
                />
                <Route path="/" exact component={Profile} />
              </Switch>
            </MainLayout>
          </Route>
        )}
        {!loggedIn && (
          <Route path={["/sign-up", "/"]}>
            <Switch>
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/" exact component={Login} />
            </Switch>
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default HelloBuildRouter;
