import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gqlQueries from '../services/gql-queries';
import { GetProfileQuery, GetProfileQueryVariables } from '../generated/graphql';
import { UserContext } from '../context/UserContext';
import './Profile.css'

const Profile: React.FC = () => {
  const user = useContext(UserContext);

  console.log(typeof user.userId);
  console.log(user.userId);

  const { data, loading, error } = useQuery<GetProfileQuery, GetProfileQueryVariables>(gqlQueries.GET_PROFILE, {
    variables: { user_id: user.userId }
  });

  if(loading) return <div>Loading</div>;
  if(error) return <div> Oops! Something went wrong. {error.message}</div>

  return (
    <main className="Profile">
      <div>
        <h1>{user.userName}</h1>
        <h1>{data?.profile?.age}</h1>
        <h1>{data?.profile?.story}</h1>
      </div>
    </main>
  );
};

export default Profile;