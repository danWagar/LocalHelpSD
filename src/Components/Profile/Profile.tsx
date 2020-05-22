import React, { useState, useContext } from 'react';
import { Profile as ProfileType, useGetProfileQuery } from '../../generated/graphql';
import { UserContext } from '../../context/UserContext';
import * as uuid from 'uuid';
import './Profile.css';

const Profile: React.FC = () => {
  const { user } = useContext(UserContext);

  const [profile, setProfile] = useState<ProfileType | null>(null);

  const { data, loading, error } = useGetProfileQuery({
    variables: { user_id: user.id },
    skip: !!profile,
  });

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) return <div> Oops! Something went wrong. Please try refreshing.</div>;

  if (data && data.profile) {
    setProfile(data.profile);
  }

  function typedKeys<T>(o: T): (keyof T)[] {
    // type cast should be safe because that's what really Object.keys() does
    return Object.keys(o) as (keyof T)[];
  }

  const getHelpOptions = () => {
    const helpOptions = profile?.help_options;
    const helpOptionKeys = typedKeys(helpOptions);

    const helpOptionsList: string[] = [];

    helpOptionKeys.forEach((k) => {
      if (helpOptions && k !== 'wants_help' && k !== '__typename' && helpOptions[k]) {
        helpOptionsList.push(k);
      }
    });
    return helpOptionsList.map((k) => (
      <li className="li_highlight" key={uuid.v4()}>
        {k}
      </li>
    ));
  };

  return (
    <main className="Profile">
      <div className="Profile_user_header">
        <div className="Profile_user_container">
          <img
            src={profile?.avatar || ''}
            alt={user.firstName + ' ' + user.lastName + "'s profile picture"}
          />
          <div className="Profile_user_info">
            <h2>{user.firstName + ' ' + user.lastName}</h2>
            <p>
              <span className="bold">Neighborhood:</span> {profile?.neighborhood}
            </p>
          </div>
        </div>
        <div className="Profile_help">
          <h3>Requesting Help With</h3>
          <ul>{profile?.help_options && getHelpOptions()}</ul>
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
