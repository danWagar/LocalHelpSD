import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};

export type Help = {
   __typename?: 'Help';
  wants_help: Scalars['Boolean'];
};

export type HelpStatus = {
   __typename?: 'HelpStatus';
  user_id?: Maybe<Scalars['Int']>;
  immunocompromised: Scalars['Boolean'];
  unemployment: Scalars['Boolean'];
  essential: Scalars['Boolean'];
};

export type HelpOptions = {
   __typename?: 'HelpOptions';
  user_id?: Maybe<Scalars['Int']>;
  wants_help: Scalars['Boolean'];
  grocery_delivery: Scalars['Boolean'];
  walk_dogs: Scalars['Boolean'];
  donations: Scalars['Boolean'];
  counceling: Scalars['Boolean'];
  career_services: Scalars['Boolean'];
};

export type Profile = {
   __typename?: 'Profile';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
  help?: Maybe<Help>;
  help_status?: Maybe<HelpStatus>;
  help_options?: Maybe<HelpOptions>;
  user?: Maybe<User>;
};

export type MessageThread = {
   __typename?: 'MessageThread';
  id: Scalars['Int'];
  created_by: Scalars['Int'];
  recipient: Scalars['Int'];
};

export type Message = {
   __typename?: 'Message';
  id: Scalars['Int'];
  thread_id: Scalars['Int'];
  sender_id: Scalars['Int'];
  receiver_id: Scalars['Int'];
  subject?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  date_sent: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  user?: Maybe<User>;
  profile?: Maybe<Profile>;
  getProfileMatches?: Maybe<Array<Maybe<Profile>>>;
  getMessageThread?: Maybe<MessageThread>;
  getUserMessageThreads?: Maybe<Array<Maybe<MessageThread>>>;
  getMessageHistory?: Maybe<Array<Maybe<Message>>>;
};


export type QueryUserArgs = {
  email: Scalars['String'];
};


export type QueryProfileArgs = {
  user_id: Scalars['Int'];
};


export type QueryGetProfileMatchesArgs = {
  wants_help: Scalars['Boolean'];
  grocery_delivery: Scalars['Boolean'];
  walk_dogs: Scalars['Boolean'];
  donations: Scalars['Boolean'];
  counceling: Scalars['Boolean'];
  career_services: Scalars['Boolean'];
};


export type QueryGetMessageThreadArgs = {
  created_by: Scalars['Int'];
  recipient: Scalars['Int'];
};


export type QueryGetUserMessageThreadsArgs = {
  user_id: Scalars['Int'];
};


export type QueryGetMessageHistoryArgs = {
  thread_id: Scalars['Int'];
};

export type Mutation = {
   __typename?: 'Mutation';
  postProfile?: Maybe<Profile>;
  postMessage?: Maybe<Message>;
};


export type MutationPostProfileArgs = {
  user_id: Scalars['Int'];
  avatar?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
  wants_help: Scalars['Boolean'];
  immunocompromised: Scalars['Boolean'];
  unemployment: Scalars['Boolean'];
  essential: Scalars['Boolean'];
  grocery_delivery: Scalars['Boolean'];
  walk_dogs: Scalars['Boolean'];
  donations: Scalars['Boolean'];
  counceling: Scalars['Boolean'];
  career_services: Scalars['Boolean'];
};


export type MutationPostMessageArgs = {
  thread_id?: Maybe<Scalars['Int']>;
  sender_id: Scalars['Int'];
  receiver_id: Scalars['Int'];
  subject?: Maybe<Scalars['String']>;
  body: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetUserQueryVariables = {
  email: Scalars['String'];
};


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'first_name' | 'last_name'>
  )> }
);

export type GetProfileQueryVariables = {
  user_id: Scalars['Int'];
};


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'avatar' | 'neighborhood' | 'story'>
    & { help?: Maybe<(
      { __typename?: 'Help' }
      & Pick<Help, 'wants_help'>
    )>, help_status?: Maybe<(
      { __typename?: 'HelpStatus' }
      & Pick<HelpStatus, 'immunocompromised' | 'unemployment' | 'essential'>
    )>, help_options?: Maybe<(
      { __typename?: 'HelpOptions' }
      & Pick<HelpOptions, 'grocery_delivery' | 'walk_dogs' | 'donations' | 'counceling' | 'career_services'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'first_name' | 'last_name'>
    )> }
  )> }
);

export type GetProfileHelpInfoQueryVariables = {
  user_id: Scalars['Int'];
};


export type GetProfileHelpInfoQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Profile' }
    & { help?: Maybe<(
      { __typename?: 'Help' }
      & Pick<Help, 'wants_help'>
    )>, help_options?: Maybe<(
      { __typename?: 'HelpOptions' }
      & Pick<HelpOptions, 'grocery_delivery' | 'walk_dogs' | 'donations' | 'counceling' | 'career_services'>
    )> }
  )> }
);

export type GetProfileUserInfoQueryVariables = {
  user_id: Scalars['Int'];
};


export type GetProfileUserInfoQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'avatar'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'first_name' | 'last_name'>
    )> }
  )> }
);

export type Mutate_ProfileMutationVariables = {
  user_id: Scalars['Int'];
  avatar?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
  wants_help: Scalars['Boolean'];
  immunocompromised: Scalars['Boolean'];
  unemployment: Scalars['Boolean'];
  essential: Scalars['Boolean'];
  grocery_delivery: Scalars['Boolean'];
  walk_dogs: Scalars['Boolean'];
  donations: Scalars['Boolean'];
  counceling: Scalars['Boolean'];
  career_services: Scalars['Boolean'];
};


export type Mutate_ProfileMutation = (
  { __typename?: 'Mutation' }
  & { postProfile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id'>
  )> }
);

export type GetProfileMatchesQueryVariables = {
  wants_help: Scalars['Boolean'];
  grocery_delivery: Scalars['Boolean'];
  walk_dogs: Scalars['Boolean'];
  donations: Scalars['Boolean'];
  counceling: Scalars['Boolean'];
  career_services: Scalars['Boolean'];
};


export type GetProfileMatchesQuery = (
  { __typename?: 'Query' }
  & { getProfileMatches?: Maybe<Array<Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'avatar' | 'neighborhood' | 'story'>
    & { help?: Maybe<(
      { __typename?: 'Help' }
      & Pick<Help, 'wants_help'>
    )>, help_status?: Maybe<(
      { __typename?: 'HelpStatus' }
      & Pick<HelpStatus, 'immunocompromised' | 'unemployment' | 'essential'>
    )>, help_options?: Maybe<(
      { __typename?: 'HelpOptions' }
      & Pick<HelpOptions, 'grocery_delivery' | 'walk_dogs' | 'donations' | 'counceling' | 'career_services'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'first_name' | 'last_name'>
    )> }
  )>>> }
);

export type Mutate_MessagesMutationVariables = {
  thread_id?: Maybe<Scalars['Int']>;
  sender_id: Scalars['Int'];
  receiver_id: Scalars['Int'];
  subject?: Maybe<Scalars['String']>;
  body: Scalars['String'];
};


export type Mutate_MessagesMutation = (
  { __typename?: 'Mutation' }
  & { postMessage?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'id'>
  )> }
);

export type GetMessageThreadQueryVariables = {
  created_by: Scalars['Int'];
  recipient: Scalars['Int'];
};


export type GetMessageThreadQuery = (
  { __typename?: 'Query' }
  & { getMessageThread?: Maybe<(
    { __typename?: 'MessageThread' }
    & Pick<MessageThread, 'id'>
  )> }
);

export type GetUserMessageThreadsQueryVariables = {
  user_id: Scalars['Int'];
};


export type GetUserMessageThreadsQuery = (
  { __typename?: 'Query' }
  & { getUserMessageThreads?: Maybe<Array<Maybe<(
    { __typename?: 'MessageThread' }
    & Pick<MessageThread, 'id' | 'created_by' | 'recipient'>
  )>>> }
);

export type GetMessageHistoryQueryVariables = {
  thread_id: Scalars['Int'];
};


export type GetMessageHistoryQuery = (
  { __typename?: 'Query' }
  & { getMessageHistory?: Maybe<Array<Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'thread_id' | 'sender_id' | 'receiver_id' | 'subject' | 'body' | 'date_sent'>
  )>>> }
);


export const GetUserDocument = gql`
    query getUser($email: String!) {
  user(email: $email) {
    id
    email
    first_name
    last_name
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetProfileDocument = gql`
    query getProfile($user_id: Int!) {
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
    user {
      id
      email
      first_name
      last_name
    }
  }
}
    `;
export type GetProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileQuery, GetProfileQueryVariables>, 'query'> & ({ variables: GetProfileQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProfileComponent = (props: GetProfileComponentProps) => (
      <ApolloReactComponents.Query<GetProfileQuery, GetProfileQueryVariables> query={GetProfileDocument} {...props} />
    );
    
export type GetProfileProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProfileQuery, GetProfileQueryVariables>
    } & TChildProps;
export function withGetProfile<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProfileQuery,
  GetProfileQueryVariables,
  GetProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProfileQuery, GetProfileQueryVariables, GetProfileProps<TChildProps, TDataName>>(GetProfileDocument, {
      alias: 'getProfile',
      ...operationOptions
    });
};

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
      }
export function useGetProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetProfileHelpInfoDocument = gql`
    query getProfileHelpInfo($user_id: Int!) {
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
    `;
export type GetProfileHelpInfoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>, 'query'> & ({ variables: GetProfileHelpInfoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProfileHelpInfoComponent = (props: GetProfileHelpInfoComponentProps) => (
      <ApolloReactComponents.Query<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables> query={GetProfileHelpInfoDocument} {...props} />
    );
    
export type GetProfileHelpInfoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>
    } & TChildProps;
export function withGetProfileHelpInfo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProfileHelpInfoQuery,
  GetProfileHelpInfoQueryVariables,
  GetProfileHelpInfoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables, GetProfileHelpInfoProps<TChildProps, TDataName>>(GetProfileHelpInfoDocument, {
      alias: 'getProfileHelpInfo',
      ...operationOptions
    });
};

/**
 * __useGetProfileHelpInfoQuery__
 *
 * To run a query within a React component, call `useGetProfileHelpInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileHelpInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileHelpInfoQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProfileHelpInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>(GetProfileHelpInfoDocument, baseOptions);
      }
export function useGetProfileHelpInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>(GetProfileHelpInfoDocument, baseOptions);
        }
export type GetProfileHelpInfoQueryHookResult = ReturnType<typeof useGetProfileHelpInfoQuery>;
export type GetProfileHelpInfoLazyQueryHookResult = ReturnType<typeof useGetProfileHelpInfoLazyQuery>;
export type GetProfileHelpInfoQueryResult = ApolloReactCommon.QueryResult<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>;
export const GetProfileUserInfoDocument = gql`
    query getProfileUserInfo($user_id: Int!) {
  profile(user_id: $user_id) {
    avatar
    user {
      id
      first_name
      last_name
    }
  }
}
    `;
export type GetProfileUserInfoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables>, 'query'> & ({ variables: GetProfileUserInfoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProfileUserInfoComponent = (props: GetProfileUserInfoComponentProps) => (
      <ApolloReactComponents.Query<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables> query={GetProfileUserInfoDocument} {...props} />
    );
    
export type GetProfileUserInfoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables>
    } & TChildProps;
export function withGetProfileUserInfo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProfileUserInfoQuery,
  GetProfileUserInfoQueryVariables,
  GetProfileUserInfoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables, GetProfileUserInfoProps<TChildProps, TDataName>>(GetProfileUserInfoDocument, {
      alias: 'getProfileUserInfo',
      ...operationOptions
    });
};

/**
 * __useGetProfileUserInfoQuery__
 *
 * To run a query within a React component, call `useGetProfileUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileUserInfoQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProfileUserInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables>(GetProfileUserInfoDocument, baseOptions);
      }
export function useGetProfileUserInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables>(GetProfileUserInfoDocument, baseOptions);
        }
export type GetProfileUserInfoQueryHookResult = ReturnType<typeof useGetProfileUserInfoQuery>;
export type GetProfileUserInfoLazyQueryHookResult = ReturnType<typeof useGetProfileUserInfoLazyQuery>;
export type GetProfileUserInfoQueryResult = ApolloReactCommon.QueryResult<GetProfileUserInfoQuery, GetProfileUserInfoQueryVariables>;
export const Mutate_ProfileDocument = gql`
    mutation MUTATE_PROFILE($user_id: Int!, $avatar: String, $neighborhood: String, $story: String, $wants_help: Boolean!, $immunocompromised: Boolean!, $unemployment: Boolean!, $essential: Boolean!, $grocery_delivery: Boolean!, $walk_dogs: Boolean!, $donations: Boolean!, $counceling: Boolean!, $career_services: Boolean!) {
  postProfile(user_id: $user_id, avatar: $avatar, neighborhood: $neighborhood, story: $story, wants_help: $wants_help, immunocompromised: $immunocompromised, unemployment: $unemployment, essential: $essential, grocery_delivery: $grocery_delivery, walk_dogs: $walk_dogs, donations: $donations, counceling: $counceling, career_services: $career_services) {
    id
  }
}
    `;
export type Mutate_ProfileMutationFn = ApolloReactCommon.MutationFunction<Mutate_ProfileMutation, Mutate_ProfileMutationVariables>;
export type Mutate_ProfileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Mutate_ProfileMutation, Mutate_ProfileMutationVariables>, 'mutation'>;

    export const Mutate_ProfileComponent = (props: Mutate_ProfileComponentProps) => (
      <ApolloReactComponents.Mutation<Mutate_ProfileMutation, Mutate_ProfileMutationVariables> mutation={Mutate_ProfileDocument} {...props} />
    );
    
export type Mutate_ProfileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Mutate_ProfileMutation, Mutate_ProfileMutationVariables>
    } & TChildProps;
export function withMutate_Profile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Mutate_ProfileMutation,
  Mutate_ProfileMutationVariables,
  Mutate_ProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Mutate_ProfileMutation, Mutate_ProfileMutationVariables, Mutate_ProfileProps<TChildProps, TDataName>>(Mutate_ProfileDocument, {
      alias: 'mutateProfile',
      ...operationOptions
    });
};

/**
 * __useMutate_ProfileMutation__
 *
 * To run a mutation, you first call `useMutate_ProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutate_ProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutateProfileMutation, { data, loading, error }] = useMutate_ProfileMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      avatar: // value for 'avatar'
 *      neighborhood: // value for 'neighborhood'
 *      story: // value for 'story'
 *      wants_help: // value for 'wants_help'
 *      immunocompromised: // value for 'immunocompromised'
 *      unemployment: // value for 'unemployment'
 *      essential: // value for 'essential'
 *      grocery_delivery: // value for 'grocery_delivery'
 *      walk_dogs: // value for 'walk_dogs'
 *      donations: // value for 'donations'
 *      counceling: // value for 'counceling'
 *      career_services: // value for 'career_services'
 *   },
 * });
 */
export function useMutate_ProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Mutate_ProfileMutation, Mutate_ProfileMutationVariables>) {
        return ApolloReactHooks.useMutation<Mutate_ProfileMutation, Mutate_ProfileMutationVariables>(Mutate_ProfileDocument, baseOptions);
      }
export type Mutate_ProfileMutationHookResult = ReturnType<typeof useMutate_ProfileMutation>;
export type Mutate_ProfileMutationResult = ApolloReactCommon.MutationResult<Mutate_ProfileMutation>;
export type Mutate_ProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<Mutate_ProfileMutation, Mutate_ProfileMutationVariables>;
export const GetProfileMatchesDocument = gql`
    query getProfileMatches($wants_help: Boolean!, $grocery_delivery: Boolean!, $walk_dogs: Boolean!, $donations: Boolean!, $counceling: Boolean!, $career_services: Boolean!) {
  getProfileMatches(wants_help: $wants_help, grocery_delivery: $grocery_delivery, walk_dogs: $walk_dogs, donations: $donations, counceling: $counceling, career_services: $career_services) {
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
    `;
export type GetProfileMatchesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>, 'query'> & ({ variables: GetProfileMatchesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProfileMatchesComponent = (props: GetProfileMatchesComponentProps) => (
      <ApolloReactComponents.Query<GetProfileMatchesQuery, GetProfileMatchesQueryVariables> query={GetProfileMatchesDocument} {...props} />
    );
    
export type GetProfileMatchesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>
    } & TChildProps;
export function withGetProfileMatches<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProfileMatchesQuery,
  GetProfileMatchesQueryVariables,
  GetProfileMatchesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProfileMatchesQuery, GetProfileMatchesQueryVariables, GetProfileMatchesProps<TChildProps, TDataName>>(GetProfileMatchesDocument, {
      alias: 'getProfileMatches',
      ...operationOptions
    });
};

/**
 * __useGetProfileMatchesQuery__
 *
 * To run a query within a React component, call `useGetProfileMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileMatchesQuery({
 *   variables: {
 *      wants_help: // value for 'wants_help'
 *      grocery_delivery: // value for 'grocery_delivery'
 *      walk_dogs: // value for 'walk_dogs'
 *      donations: // value for 'donations'
 *      counceling: // value for 'counceling'
 *      career_services: // value for 'career_services'
 *   },
 * });
 */
export function useGetProfileMatchesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>(GetProfileMatchesDocument, baseOptions);
      }
export function useGetProfileMatchesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>(GetProfileMatchesDocument, baseOptions);
        }
export type GetProfileMatchesQueryHookResult = ReturnType<typeof useGetProfileMatchesQuery>;
export type GetProfileMatchesLazyQueryHookResult = ReturnType<typeof useGetProfileMatchesLazyQuery>;
export type GetProfileMatchesQueryResult = ApolloReactCommon.QueryResult<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>;
export const Mutate_MessagesDocument = gql`
    mutation Mutate_Messages($thread_id: Int, $sender_id: Int!, $receiver_id: Int!, $subject: String, $body: String!) {
  postMessage(thread_id: $thread_id, sender_id: $sender_id, receiver_id: $receiver_id, subject: $subject, body: $body) {
    id
  }
}
    `;
export type Mutate_MessagesMutationFn = ApolloReactCommon.MutationFunction<Mutate_MessagesMutation, Mutate_MessagesMutationVariables>;
export type Mutate_MessagesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Mutate_MessagesMutation, Mutate_MessagesMutationVariables>, 'mutation'>;

    export const Mutate_MessagesComponent = (props: Mutate_MessagesComponentProps) => (
      <ApolloReactComponents.Mutation<Mutate_MessagesMutation, Mutate_MessagesMutationVariables> mutation={Mutate_MessagesDocument} {...props} />
    );
    
export type Mutate_MessagesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Mutate_MessagesMutation, Mutate_MessagesMutationVariables>
    } & TChildProps;
export function withMutate_Messages<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Mutate_MessagesMutation,
  Mutate_MessagesMutationVariables,
  Mutate_MessagesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Mutate_MessagesMutation, Mutate_MessagesMutationVariables, Mutate_MessagesProps<TChildProps, TDataName>>(Mutate_MessagesDocument, {
      alias: 'mutateMessages',
      ...operationOptions
    });
};

/**
 * __useMutate_MessagesMutation__
 *
 * To run a mutation, you first call `useMutate_MessagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutate_MessagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutateMessagesMutation, { data, loading, error }] = useMutate_MessagesMutation({
 *   variables: {
 *      thread_id: // value for 'thread_id'
 *      sender_id: // value for 'sender_id'
 *      receiver_id: // value for 'receiver_id'
 *      subject: // value for 'subject'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useMutate_MessagesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Mutate_MessagesMutation, Mutate_MessagesMutationVariables>) {
        return ApolloReactHooks.useMutation<Mutate_MessagesMutation, Mutate_MessagesMutationVariables>(Mutate_MessagesDocument, baseOptions);
      }
export type Mutate_MessagesMutationHookResult = ReturnType<typeof useMutate_MessagesMutation>;
export type Mutate_MessagesMutationResult = ApolloReactCommon.MutationResult<Mutate_MessagesMutation>;
export type Mutate_MessagesMutationOptions = ApolloReactCommon.BaseMutationOptions<Mutate_MessagesMutation, Mutate_MessagesMutationVariables>;
export const GetMessageThreadDocument = gql`
    query getMessageThread($created_by: Int!, $recipient: Int!) {
  getMessageThread(created_by: $created_by, recipient: $recipient) {
    id
  }
}
    `;
export type GetMessageThreadComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMessageThreadQuery, GetMessageThreadQueryVariables>, 'query'> & ({ variables: GetMessageThreadQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetMessageThreadComponent = (props: GetMessageThreadComponentProps) => (
      <ApolloReactComponents.Query<GetMessageThreadQuery, GetMessageThreadQueryVariables> query={GetMessageThreadDocument} {...props} />
    );
    
export type GetMessageThreadProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMessageThreadQuery, GetMessageThreadQueryVariables>
    } & TChildProps;
export function withGetMessageThread<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMessageThreadQuery,
  GetMessageThreadQueryVariables,
  GetMessageThreadProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMessageThreadQuery, GetMessageThreadQueryVariables, GetMessageThreadProps<TChildProps, TDataName>>(GetMessageThreadDocument, {
      alias: 'getMessageThread',
      ...operationOptions
    });
};

/**
 * __useGetMessageThreadQuery__
 *
 * To run a query within a React component, call `useGetMessageThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageThreadQuery({
 *   variables: {
 *      created_by: // value for 'created_by'
 *      recipient: // value for 'recipient'
 *   },
 * });
 */
export function useGetMessageThreadQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMessageThreadQuery, GetMessageThreadQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMessageThreadQuery, GetMessageThreadQueryVariables>(GetMessageThreadDocument, baseOptions);
      }
export function useGetMessageThreadLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMessageThreadQuery, GetMessageThreadQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMessageThreadQuery, GetMessageThreadQueryVariables>(GetMessageThreadDocument, baseOptions);
        }
export type GetMessageThreadQueryHookResult = ReturnType<typeof useGetMessageThreadQuery>;
export type GetMessageThreadLazyQueryHookResult = ReturnType<typeof useGetMessageThreadLazyQuery>;
export type GetMessageThreadQueryResult = ApolloReactCommon.QueryResult<GetMessageThreadQuery, GetMessageThreadQueryVariables>;
export const GetUserMessageThreadsDocument = gql`
    query getUserMessageThreads($user_id: Int!) {
  getUserMessageThreads(user_id: $user_id) {
    id
    created_by
    recipient
  }
}
    `;
export type GetUserMessageThreadsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables>, 'query'> & ({ variables: GetUserMessageThreadsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserMessageThreadsComponent = (props: GetUserMessageThreadsComponentProps) => (
      <ApolloReactComponents.Query<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables> query={GetUserMessageThreadsDocument} {...props} />
    );
    
export type GetUserMessageThreadsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables>
    } & TChildProps;
export function withGetUserMessageThreads<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserMessageThreadsQuery,
  GetUserMessageThreadsQueryVariables,
  GetUserMessageThreadsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables, GetUserMessageThreadsProps<TChildProps, TDataName>>(GetUserMessageThreadsDocument, {
      alias: 'getUserMessageThreads',
      ...operationOptions
    });
};

/**
 * __useGetUserMessageThreadsQuery__
 *
 * To run a query within a React component, call `useGetUserMessageThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMessageThreadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMessageThreadsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserMessageThreadsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables>(GetUserMessageThreadsDocument, baseOptions);
      }
export function useGetUserMessageThreadsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables>(GetUserMessageThreadsDocument, baseOptions);
        }
export type GetUserMessageThreadsQueryHookResult = ReturnType<typeof useGetUserMessageThreadsQuery>;
export type GetUserMessageThreadsLazyQueryHookResult = ReturnType<typeof useGetUserMessageThreadsLazyQuery>;
export type GetUserMessageThreadsQueryResult = ApolloReactCommon.QueryResult<GetUserMessageThreadsQuery, GetUserMessageThreadsQueryVariables>;
export const GetMessageHistoryDocument = gql`
    query getMessageHistory($thread_id: Int!) {
  getMessageHistory(thread_id: $thread_id) {
    id
    thread_id
    sender_id
    receiver_id
    subject
    body
    date_sent
  }
}
    `;
export type GetMessageHistoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMessageHistoryQuery, GetMessageHistoryQueryVariables>, 'query'> & ({ variables: GetMessageHistoryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetMessageHistoryComponent = (props: GetMessageHistoryComponentProps) => (
      <ApolloReactComponents.Query<GetMessageHistoryQuery, GetMessageHistoryQueryVariables> query={GetMessageHistoryDocument} {...props} />
    );
    
export type GetMessageHistoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMessageHistoryQuery, GetMessageHistoryQueryVariables>
    } & TChildProps;
export function withGetMessageHistory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMessageHistoryQuery,
  GetMessageHistoryQueryVariables,
  GetMessageHistoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMessageHistoryQuery, GetMessageHistoryQueryVariables, GetMessageHistoryProps<TChildProps, TDataName>>(GetMessageHistoryDocument, {
      alias: 'getMessageHistory',
      ...operationOptions
    });
};

/**
 * __useGetMessageHistoryQuery__
 *
 * To run a query within a React component, call `useGetMessageHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageHistoryQuery({
 *   variables: {
 *      thread_id: // value for 'thread_id'
 *   },
 * });
 */
export function useGetMessageHistoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMessageHistoryQuery, GetMessageHistoryQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMessageHistoryQuery, GetMessageHistoryQueryVariables>(GetMessageHistoryDocument, baseOptions);
      }
export function useGetMessageHistoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMessageHistoryQuery, GetMessageHistoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMessageHistoryQuery, GetMessageHistoryQueryVariables>(GetMessageHistoryDocument, baseOptions);
        }
export type GetMessageHistoryQueryHookResult = ReturnType<typeof useGetMessageHistoryQuery>;
export type GetMessageHistoryLazyQueryHookResult = ReturnType<typeof useGetMessageHistoryLazyQuery>;
export type GetMessageHistoryQueryResult = ApolloReactCommon.QueryResult<GetMessageHistoryQuery, GetMessageHistoryQueryVariables>;