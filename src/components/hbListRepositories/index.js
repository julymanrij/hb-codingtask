import "./styles.css";
import Loader from "react-loader-spinner";
import { GET_REPOSITORIES } from "../../graphql/queries";
import Repository from "../repository";
import { useQuery } from "@apollo/client";

const HbListRepositories = (props) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { login: props.user },
  });

  if (loading)
    return (
      <div className="loader">
        <Loader type="Puff" color="#16d499" size={10} />
      </div>
    );
  if (error) return <p>Error 2:(</p>;

  return (
    <ul className="repositories">
      {!props.filterFavorites &&
        data.user.repositories.nodes
          .filter(
            (repo) =>
              repo.name.toUpperCase().includes(props.search.toUpperCase()) ||
              props.search === ""
          )
          .map(({ name, id, description, url, viewerHasStarred }) => (
            <li key={id}>
              <Repository
                name={name}
                description={description}
                url={url}
                viewerHasStarred={viewerHasStarred}
                id={id}
                user={props.user}
              ></Repository>
            </li>
          ))}

      {props.filterFavorites &&
        data.user.repositories.nodes
          .filter(
            (repo) =>
              repo.name.toUpperCase().includes(props.search.toUpperCase()) ||
              props.search === ""
          )
          .filter((repo) => repo.viewerHasStarred)
          .map(({ name, id, description, url, viewerHasStarred }) => (
            <li key={id}>
              <Repository
                name={name}
                description={description}
                url={url}
                viewerHasStarred={viewerHasStarred}
                id={id}
                user={props.user}
              ></Repository>
            </li>
          ))}
    </ul>
  );
};

export default HbListRepositories;
