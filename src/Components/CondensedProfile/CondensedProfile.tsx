import React, { useState, useContext } from 'react';
import { ProfileType, useGetProfileQuery } from '../../generated/graphql';
import { UserContext } from '../../context/UserContext';
import './CondensedProfile.css';

const CondensedProfile: React.FC = () => {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState<ProfileType | null>(null);

  console.log('rendering profile');
  const { data, loading, error } = useGetProfileQuery({
    variables: {
      user_id: user.id,
    },
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
    return helpOptionsList.map((k) => <li>{k}</li>);
  };

  return (
    <div className="CondensedProfile">
      <img src={profile?.avatar || ''} alt={user.firstName + ' ' + user.lastName + "'s profile picture"} />
      <div className="CondensedProfile_user_info">
        <p className="CondensedProfile_weighted">{user.firstName + ' ' + user.lastName}</p>
        <p>neighborhood: {profile?.neighborhood}</p>
      </div>
      <div>
        <p className="CondensedProfile_weighted">Requesting Help</p>
        <ul className="CondensedProfile_help_list">{profile?.help_options && getHelpOptions()}</ul>
      </div>
      <div className="CondensedProfile_user_story">
        <p className="CondensedProfile_weighted">My Story</p>
        <p>{profile?.story}</p>
      </div>
    </div>
  );
};

export default CondensedProfile;
