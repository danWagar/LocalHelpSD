import gql from 'graphql-tag';

const gqlQueries = {
  GET_USER: gql`
    query getUser($email: String) {
      user(email: $email) {
        id
        email
        first_name
        last_name
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

  GET_PROFILE_HELP_INFO: gql`
    query getProfileHelpInfo($user_id: Int) {
      profile(user_id: $user_id) {
        help {
          wants_help
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
    mutation MUTATE_PROFILE(
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
      postProfile(
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

  GET_PROFILE_MATCHES: gql`
    query getProfileMatches(
      $wants_help: Boolean
      $grocery_delivery: Boolean
      $walk_dogs: Boolean
      $donations: Boolean
      $counceling: Boolean
      $career_services: Boolean
    ) {
      getProfileMatches(
        wants_help: $wants_help
        grocery_delivery: $grocery_delivery
        walk_dogs: $walk_dogs
        donations: $donations
        counceling: $counceling
        career_services: $career_services
      ) {
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
        user {
          id
          email
          first_name
          last_name
        }
      }
    }
  `,

  MUTATE_MESSAGES: gql`
    mutation Mutate_Messages($sender_id: Int!, $receiver_id: Int!, $subject: String, $body: String!) {
      postMessage(sender_id: $sender_id, receiver_id: $receiver_id, subject: $subject, body: $body) {
        id
      }
    }
  `,

  GET_MESSAGE_HISTORY: gql`
    query getMessageHistory($sender_id: Int!, $receiver_id: Int!) {
      getMessageHistory(sender_id: $sender_id, receiver_id: $receiver_id) {
        id
        sender_id
        receiver_id
        subject
        body
        date_sent
      }
    }
  `,
};

export default gqlQueries;
