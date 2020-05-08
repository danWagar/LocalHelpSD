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
};


export type RootQueryTypeUserArgs = {
  user_name?: Maybe<Scalars['String']>;
};


export type RootQueryTypeProfileArgs = {
  user_id?: Maybe<Scalars['Int']>;
};

export type UserType = {
   __typename?: 'UserType';
  id?: Maybe<Scalars['Int']>;
  user_name?: Maybe<Scalars['String']>;
};

export type ProfileType = {
   __typename?: 'ProfileType';
  id?: Maybe<Scalars['Int']>;
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

export type Mutation = {
   __typename?: 'Mutation';
  addProfile?: Maybe<ProfileType>;
};


export type MutationAddProfileArgs = {
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
  user_name?: Maybe<Scalars['String']>;
};


export type GetUserQuery = (
  { __typename?: 'RootQueryType' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'user_name'>
  )> }
);

export type GetProfileQueryVariables = {
  user_id?: Maybe<Scalars['Int']>;
};


export type GetProfileQuery = (
  { __typename?: 'RootQueryType' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileType' }
    & Pick<ProfileType, 'avatar' | 'neighborhood' | 'story'>
  )> }
);

export type MutationMutationVariables = {
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


export type MutationMutation = (
  { __typename?: 'Mutation' }
  & { addProfile?: Maybe<(
    { __typename?: 'ProfileType' }
    & Pick<ProfileType, 'id'>
  )> }
);


export const GetUserDocument = gql`
    query getUser($user_name: String) {
  user(user_name: $user_name) {
    id
    user_name
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
 *      user_name: // value for 'user_name'
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
    avatar
    neighborhood
    story
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
export const MutationDocument = gql`
    mutation Mutation($user_id: Int!, $avatar: String, $neighborhood: String, $story: String, $wants_help: Boolean!, $immunocompromised: Boolean!, $unemployment: Boolean!, $essential: Boolean!, $grocery_delivery: Boolean!, $walk_dogs: Boolean!, $donations: Boolean!, $counceling: Boolean!, $career_services: Boolean!) {
  addProfile(user_id: $user_id, avatar: $avatar, neighborhood: $neighborhood, story: $story, wants_help: $wants_help, immunocompromised: $immunocompromised, unemployment: $unemployment, essential: $essential, grocery_delivery: $grocery_delivery, walk_dogs: $walk_dogs, donations: $donations, counceling: $counceling, career_services: $career_services) {
    id
  }
}
    `;
export type MutationMutationFn = ApolloReactCommon.MutationFunction<MutationMutation, MutationMutationVariables>;
export type MutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MutationMutation, MutationMutationVariables>, 'mutation'>;

    export const MutationComponent = (props: MutationComponentProps) => (
      <ApolloReactComponents.Mutation<MutationMutation, MutationMutationVariables> mutation={MutationDocument} {...props} />
    );
    
export type MutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<MutationMutation, MutationMutationVariables>
    } & TChildProps;
export function withMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MutationMutation,
  MutationMutationVariables,
  MutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, MutationMutation, MutationMutationVariables, MutationProps<TChildProps, TDataName>>(MutationDocument, {
      alias: 'mutation',
      ...operationOptions
    });
};

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
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
export function useMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        return ApolloReactHooks.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, baseOptions);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = ApolloReactCommon.MutationResult<MutationMutation>;
export type MutationMutationOptions = ApolloReactCommon.BaseMutationOptions<MutationMutation, MutationMutationVariables>;