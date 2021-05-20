import { gql } from "@apollo/client";

export const ADD_STAR = gql`
  mutation ($starrableId: ID!) {
    addStar(input: { starrableId: $starrableId }) {
      starrable {
        id
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation ($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      starrable {
        id
      }
    }
  }
`;
