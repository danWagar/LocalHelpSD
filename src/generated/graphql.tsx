import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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
  user?: Maybe<User>;
  profile?: Maybe<Profile>;
};


export type RootQueryTypeUserArgs = {
  user_name?: Maybe<Scalars['String']>;
};


export type RootQueryTypeProfileArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type User = {
   __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  user_name?: Maybe<Scalars['String']>;
};

export type Profile = {
   __typename?: 'Profile';
  id?: Maybe<Scalars['ID']>;
  user_id?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  story?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addProfile?: Maybe<Profile>;
};


export type MutationAddProfileArgs = {
  user_id?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  story?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = {
  user_name?: Maybe<Scalars['String']>;
};


export type Unnamed_1_Query = (
  { __typename?: 'RootQueryType' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'user_name'>
  )> }
);

