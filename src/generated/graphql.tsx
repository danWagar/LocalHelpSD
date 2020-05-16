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
};

export type RootQueryType = {
   __typename?: 'RootQueryType';
  user?: Maybe<UserType>;
  profile?: Maybe<ProfileType>;
  getProfileMatches?: Maybe<Array<Maybe<ProfileType>>>;
};


export type RootQueryTypeUserArgs = {
  email?: Maybe<Scalars['String']>;
};


export type RootQueryTypeProfileArgs = {
  user_id?: Maybe<Scalars['Int']>;
};


export type RootQueryTypeGetProfileMatchesArgs = {
  wants_help?: Maybe<Scalars['Boolean']>;
  grocery_delivery?: Maybe<Scalars['Boolean']>;
  walk_dogs?: Maybe<Scalars['Boolean']>;
  donations?: Maybe<Scalars['Boolean']>;
  counceling?: Maybe<Scalars['Boolean']>;
  career_services?: Maybe<Scalars['Boolean']>;
};

export type UserType = {
   __typename?: 'UserType';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

export type ProfileType = {
   __typename?: 'ProfileType';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
  help?: Maybe<HelpType>;
  help_status?: Maybe<HelpStatusType>;
  help_options?: Maybe<HelpOptionType>;
  user?: Maybe<UserType>;
};

export type HelpType = {
   __typename?: 'HelpType';
  wants_help?: Maybe<Scalars['Boolean']>;
};

export type HelpStatusType = {
   __typename?: 'HelpStatusType';
  user_id?: Maybe<Scalars['Int']>;
  immunocompromised?: Maybe<Scalars['Boolean']>;
  unemployment?: Maybe<Scalars['Boolean']>;
  essential?: Maybe<Scalars['Boolean']>;
};

export type HelpOptionType = {
   __typename?: 'HelpOptionType';
  user_id?: Maybe<Scalars['Int']>;
  wants_help?: Maybe<Scalars['Boolean']>;
  grocery_delivery?: Maybe<Scalars['Boolean']>;
  walk_dogs?: Maybe<Scalars['Boolean']>;
  donations?: Maybe<Scalars['Boolean']>;
  counceling?: Maybe<Scalars['Boolean']>;
  career_services?: Maybe<Scalars['Boolean']>;
};

export type Mutate_Profile = {
   __typename?: 'MUTATE_PROFILE';
  addProfile?: Maybe<ProfileType>;
};


export type Mutate_ProfileAddProfileArgs = {
  user_id?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
  wants_help?: Maybe<Scalars['Boolean']>;
  immunocompromised?: Maybe<Scalars['Boolean']>;
  unemployment?: Maybe<Scalars['Boolean']>;
  essential?: Maybe<Scalars['Boolean']>;
  grocery_delivery?: Maybe<Scalars['Boolean']>;
  walk_dogs?: Maybe<Scalars['Boolean']>;
  donations?: Maybe<Scalars['Boolean']>;
  counceling?: Maybe<Scalars['Boolean']>;
  career_services?: Maybe<Scalars['Boolean']>;
};

export type GetUserQueryVariables = {
  email?: Maybe<Scalars['String']>;
};


export type GetUserQuery = (
  { __typename?: 'RootQueryType' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'email' | 'first_name' | 'last_name'>
  )> }
);

export type GetProfileQueryVariables = {
  user_id?: Maybe<Scalars['Int']>;
};


export type GetProfileQuery = (
  { __typename?: 'RootQueryType' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileType' }
    & Pick<ProfileType, 'id' | 'avatar' | 'neighborhood' | 'story'>
    & { help?: Maybe<(
      { __typename?: 'HelpType' }
      & Pick<HelpType, 'wants_help'>
    )>, help_status?: Maybe<(
      { __typename?: 'HelpStatusType' }
      & Pick<HelpStatusType, 'immunocompromised' | 'unemployment' | 'essential'>
    )>, help_options?: Maybe<(
      { __typename?: 'HelpOptionType' }
      & Pick<HelpOptionType, 'grocery_delivery' | 'walk_dogs' | 'donations' | 'counceling' | 'career_services'>
    )> }
  )> }
);

export type GetProfileHelpInfoQueryVariables = {
  user_id?: Maybe<Scalars['Int']>;
};


export type GetProfileHelpInfoQuery = (
  { __typename?: 'RootQueryType' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileType' }
    & { help?: Maybe<(
      { __typename?: 'HelpType' }
      & Pick<HelpType, 'wants_help'>
    )>, help_options?: Maybe<(
      { __typename?: 'HelpOptionType' }
      & Pick<HelpOptionType, 'grocery_delivery' | 'walk_dogs' | 'donations' | 'counceling' | 'career_services'>
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
  { __typename?: 'MUTATE_PROFILE' }
  & { addProfile?: Maybe<(
    { __typename?: 'ProfileType' }
    & Pick<ProfileType, 'id'>
  )> }
);

export type GetProfileMatchesQueryVariables = {
  wants_help?: Maybe<Scalars['Boolean']>;
  grocery_delivery?: Maybe<Scalars['Boolean']>;
  walk_dogs?: Maybe<Scalars['Boolean']>;
  donations?: Maybe<Scalars['Boolean']>;
  counceling?: Maybe<Scalars['Boolean']>;
  career_services?: Maybe<Scalars['Boolean']>;
};


export type GetProfileMatchesQuery = (
  { __typename?: 'RootQueryType' }
  & { getProfileMatches?: Maybe<Array<Maybe<(
    { __typename?: 'ProfileType' }
    & Pick<ProfileType, 'id' | 'avatar' | 'neighborhood' | 'story'>
    & { help?: Maybe<(
      { __typename?: 'HelpType' }
      & Pick<HelpType, 'wants_help'>
    )>, help_status?: Maybe<(
      { __typename?: 'HelpStatusType' }
      & Pick<HelpStatusType, 'immunocompromised' | 'unemployment' | 'essential'>
    )>, help_options?: Maybe<(
      { __typename?: 'HelpOptionType' }
      & Pick<HelpOptionType, 'grocery_delivery' | 'walk_dogs' | 'donations' | 'counceling' | 'career_services'>
    )>, user?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'email' | 'first_name' | 'last_name'>
    )> }
  )>>> }
);

export type GetProfileUserQueryVariables = {
  user_id?: Maybe<Scalars['Int']>;
};


export type GetProfileUserQuery = (
  { __typename?: 'RootQueryType' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileType' }
    & Pick<ProfileType, 'id' | 'avatar' | 'neighborhood' | 'story'>
    & { help?: Maybe<(
      { __typename?: 'HelpType' }
      & Pick<HelpType, 'wants_help'>
    )>, help_status?: Maybe<(
      { __typename?: 'HelpStatusType' }
      & Pick<HelpStatusType, 'immunocompromised' | 'unemployment' | 'essential'>
    )>, help_options?: Maybe<(
      { __typename?: 'HelpOptionType' }
      & Pick<HelpOptionType, 'grocery_delivery' | 'walk_dogs' | 'donations' | 'counceling' | 'career_services'>
    )>, user?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'first_name' | 'last_name'>
    )> }
  )> }
);


export const GetUserDocument = gql`
    query getUser($email: String) {
  user(email: $email) {
    id
    email
    first_name
    last_name
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'>;

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
    `;
export type GetProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileQuery, GetProfileQueryVariables>, 'query'>;

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
    `;
export type GetProfileHelpInfoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileHelpInfoQuery, GetProfileHelpInfoQueryVariables>, 'query'>;

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
export const Mutate_ProfileDocument = gql`
    mutation MUTATE_PROFILE($user_id: Int!, $avatar: String, $neighborhood: String, $story: String, $wants_help: Boolean!, $immunocompromised: Boolean!, $unemployment: Boolean!, $essential: Boolean!, $grocery_delivery: Boolean!, $walk_dogs: Boolean!, $donations: Boolean!, $counceling: Boolean!, $career_services: Boolean!) {
  addProfile(user_id: $user_id, avatar: $avatar, neighborhood: $neighborhood, story: $story, wants_help: $wants_help, immunocompromised: $immunocompromised, unemployment: $unemployment, essential: $essential, grocery_delivery: $grocery_delivery, walk_dogs: $walk_dogs, donations: $donations, counceling: $counceling, career_services: $career_services) {
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
    query getProfileMatches($wants_help: Boolean, $grocery_delivery: Boolean, $walk_dogs: Boolean, $donations: Boolean, $counceling: Boolean, $career_services: Boolean) {
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
      email
      first_name
      last_name
    }
  }
}
    `;
export type GetProfileMatchesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileMatchesQuery, GetProfileMatchesQueryVariables>, 'query'>;

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
export const GetProfileUserDocument = gql`
    query getProfileUser($user_id: Int) {
  profile {
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
      first_name
      last_name
    }
  }
}
    `;
export type GetProfileUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileUserQuery, GetProfileUserQueryVariables>, 'query'>;

    export const GetProfileUserComponent = (props: GetProfileUserComponentProps) => (
      <ApolloReactComponents.Query<GetProfileUserQuery, GetProfileUserQueryVariables> query={GetProfileUserDocument} {...props} />
    );
    
export type GetProfileUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProfileUserQuery, GetProfileUserQueryVariables>
    } & TChildProps;
export function withGetProfileUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProfileUserQuery,
  GetProfileUserQueryVariables,
  GetProfileUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProfileUserQuery, GetProfileUserQueryVariables, GetProfileUserProps<TChildProps, TDataName>>(GetProfileUserDocument, {
      alias: 'getProfileUser',
      ...operationOptions
    });
};

/**
 * __useGetProfileUserQuery__
 *
 * To run a query within a React component, call `useGetProfileUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProfileUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileUserQuery, GetProfileUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileUserQuery, GetProfileUserQueryVariables>(GetProfileUserDocument, baseOptions);
      }
export function useGetProfileUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileUserQuery, GetProfileUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileUserQuery, GetProfileUserQueryVariables>(GetProfileUserDocument, baseOptions);
        }
export type GetProfileUserQueryHookResult = ReturnType<typeof useGetProfileUserQuery>;
export type GetProfileUserLazyQueryHookResult = ReturnType<typeof useGetProfileUserLazyQuery>;
export type GetProfileUserQueryResult = ApolloReactCommon.QueryResult<GetProfileUserQuery, GetProfileUserQueryVariables>;