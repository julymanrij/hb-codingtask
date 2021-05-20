import "./styles.css";
import Loader from "react-loader-spinner";
import React, { useEffect, useState } from "react";
import { OAuth } from "oauthio-web";
import HbButton from "../../components/hbButton";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";
import HbListRepositories from "../../components/hbListRepositories";
import HbInput from "../../components/hbInput";
import HbCheckBox from "../../components/hbCheckBox";

const ListRepositories = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterFavorites, setFilterFavorites] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_USER);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  function loginGithub() {
    OAuth.initialize(process.env.REACT_APP_OAUTH_CLIENT_ID);
    OAuth.popup("github").done(function (result) {
      sessionStorage.removeItem("token");
      sessionStorage.setItem("token", result.access_token);
      refetch();
      setLoggedIn(true);
    });
  }

  function searchRepositories(event) {
    setSearchText(event.target.value);
  }

  function checkFilterFavorites(event) {
    setFilterFavorites(event.target.checked);
  }

  if (loading)
    return (
      <div className="loader">
        <Loader type="Puff" color="#16d499" size={10} />
      </div>
    );

  return (
    <section className="listRepositories flexColumn container content">
      <h1>Repositories</h1>
      {(!loggedIn || error) && (
        <>
          <HbButton
            text="Sign in with Github"
            onclick={loginGithub}
            type="submit"
          ></HbButton>
        </>
      )}
      {loggedIn && error && (
        <span className="error">
          Your token has expired, please login again
        </span>
      )}
      {data && (
        <>
          <HbInput
            label="Search repository by name"
            type="search"
            showIcon={true}
            nameIcon="search"
            onChange={searchRepositories}
          ></HbInput>
          
          <div className="filters">
            <HbCheckBox
              label="Filter Favorites"
              name="favorites"
              onChange={checkFilterFavorites}
            ></HbCheckBox>
          </div>

          <HbListRepositories
            filterFavorites={filterFavorites}
            search={searchText}
            user={data.viewer.login}
          ></HbListRepositories>
        </>
      )}
    </section>
  );
};

export default ListRepositories;