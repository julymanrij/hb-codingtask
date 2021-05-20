import "./styles.css";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";
import Loader from "react-loader-spinner";
import React, { useEffect, useState } from "react";

const HbUser = () => {
  const [nameUser, setNameUser] = useState("");
  const { loading, error, data } = useQuery(GET_USER);
  
  
  
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    console.log(userData);
    if (userData) {
      setNameUser(userData.name);
    }
  }, []);
  

  if (loading)
    return (
      <div className="loader">
        <Loader type="Puff" color="#16d499" size={10} />
      </div>
    );
  if (error) return <span className="error">{error}</span>;

  return (
    <div className="hbUser flexColumn">
      <h2>{nameUser}</h2>
      <img src={data.viewer.avatarUrl} alt="Profile"></img>
      <p>{data.viewer.bio}</p>
      <a className="userName" href={data.viewer.url} target="blank">
        {data.viewer.login}
      </a>
    </div>
  );
};

export default HbUser;
