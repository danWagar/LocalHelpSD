import gql from 'graphql-tag';

const gqlQueries = {
  GET_USER: gql`
    query getUser($user_name: String) {
      user(user_name: $user_name) {
        id
        user_name
      }
    }
  `,

  GET_PROFILE: gql`
    query getProfile($user_id: Int) {
      profile(user_id: $user_id) {
        avatar
        age
        story
      }
    }
  `
};

export default gqlQueries;
