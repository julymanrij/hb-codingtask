import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    viewer {
      login
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query User($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        totalCount
        nodes {
          url
          id
          name
          description
          viewerHasStarred
        }
      }
    }
  }
`;
