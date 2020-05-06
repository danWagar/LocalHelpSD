import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gqlQueries from '../services/gql-queries';
import { ProfileType, GetProfileQuery, GetProfileQueryVariables } from '../generated/graphql';
import { UserContext } from '../context/UserContext';
import './Profile.css';

const Profile: React.FC = () => {
  const user = useContext(UserContext);
  const [profile, setProfile] = useState<ProfileType | null>(null);

  const { data, loading, error } = useQuery<GetProfileQuery, GetProfileQueryVariables>(
    gqlQueries.GET_PROFILE,
    {
      variables: { user_id: user.userId },
      skip: !!profile,
    }
  );

  if (loading) return <div>Loading</div>;
  if (error) return <div> Oops! Something went wrong. Please try refreshing.</div>;

  if (data && data.profile) {
    setProfile(data.profile);
  }

  return (
    <main className="Profile">
      <div className="Profile_user_header">
        <img src={profile?.avatar || ''} alt={user.userName + "'s profile picture"} />
        <div className="Profile_user_info">
          <h2>{user.userName}</h2>
          <p>neighborhood: {profile?.neighborhood}</p>
        </div>
      </div>
      <div className="Profile_user_story">
        <h2>My Story</h2>
        <p>{profile?.story}</p>
      </div>
    </main>
  );
};

export default Profile;
