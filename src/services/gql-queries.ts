import gql from 'graphql-tag';

const gqlQueries = {
  GET_USER: gql`
    query($user_name: String) {
      user(user_name: $user_name) {
        id
        user_name
      }
    }
  `
};

export default gqlQueries;
