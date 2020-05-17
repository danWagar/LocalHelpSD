import React, { useContext } from 'react';
import { ProfileType, useGetProfileQuery } from '../../generated/graphql';
import { UserContext } from '../../context/UserContext';
import './CondensedProfile.css';

interface iCondensedProfile {
  profile: ProfileType;
  toggleShowMessage: (profile: ProfileType) => void;
}

const CondensedProfile: React.FC<iCondensedProfile> = (props) => {
  const { profile, toggleShowMessage } = props;
  const userName = profile?.user?.first_name + ' ' + profile?.user?.last_name;
  console.log(profile);
  const { user } = useContext(UserContext);

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

  const handleMessageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    toggleShowMessage(profile);
  };

  return (
    <div className="CondensedProfile">
      <img src={profile?.avatar || ''} alt={userName + "'s profile picture"} />
      <div className="CondensedProfile_user_info">
        <p className="bold">{userName}</p>
        <p>neighborhood: {profile?.neighborhood}</p>
      </div>
      <div>
        <p className="bold">Requesting Help</p>
        <ul className="CondensedProfile_help_list">{profile?.help_options && getHelpOptions()}</ul>
      </div>
      <div className="CondensedProfile_user_story">
        <p className="bold">My Story</p>
        <p>{profile?.story}</p>
      </div>
      <div onClick={handleMessageClick}>Message</div>
    </div>
  );
};

export default CondensedProfile;
