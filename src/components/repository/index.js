import "./styles.css";
import HbIcon from "../hbIcon";
import { ADD_STAR, REMOVE_STAR } from "../../graphql/mutations";
import { GET_REPOSITORIES } from "../../graphql/queries";
import { useMutation } from "@apollo/client";

const Repository = (props) => {
  const queryToRefetch = {
    query: GET_REPOSITORIES,
    variables: { login: props.user },
  };
  const [addStar] = useMutation(ADD_STAR, {
    refetchQueries: [queryToRefetch],
  });
  const [removeStar] = useMutation(REMOVE_STAR, {
    refetchQueries: [queryToRefetch],
  });

  return (
    <div className="repository">
      <a className="repoTitle" href={props.url} target="blank">{props.name}</a>
      <p>{props.description}</p>
      <span>{props.createdAt}</span>
      {props.viewerHasStarred && (
        <div
          className="starIconButton"
          onClick={(e) => {
            e.preventDefault();
            removeStar({ variables: { starrableId: props.id } });
          }}
        >
          <HbIcon name="star-full" color="#e4ac10" size={30}></HbIcon>
        </div>
      )}
      {!props.viewerHasStarred && (
        <div
          className="starIconButton"
          onClick={() => {
            addStar({ variables: { starrableId: props.id } });
          }}
        >
          <HbIcon name="star-empty" color="#e4ac10" size={30}></HbIcon>
        </div>
      )}
    </div>
  );
};

export default Repository;
