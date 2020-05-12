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
        id
        avatar
        neighborhood
        story
        help {
          wants_help
        }
        help_status {
          immunocompromised
          unemployment
          essential
        }
        help_options {
          grocery_delivery
          walk_dogs
          donations
          counceling
          career_services
        }
      }
    }
  `,

  MUTATE_PROFILE: gql`
    mutation Mutation(
      $user_id: Int!
      $avatar: String
      $neighborhood: String
      $story: String
      $wants_help: Boolean!
      $immunocompromised: Boolean!
      $unemployment: Boolean!
      $essential: Boolean!
      $grocery_delivery: Boolean!
      $walk_dogs: Boolean!
      $donations: Boolean!
      $counceling: Boolean!
      $career_services: Boolean!
    ) {
      addProfile(
        user_id: $user_id
        avatar: $avatar
        neighborhood: $neighborhood
        story: $story
        wants_help: $wants_help
        immunocompromised: $immunocompromised
        unemployment: $unemployment
        essential: $essential
        grocery_delivery: $grocery_delivery
        walk_dogs: $walk_dogs
        donations: $donations
        counceling: $counceling
        career_services: $career_services
      ) {
        id
      }
    }
  `,
};

export default gqlQueries;
