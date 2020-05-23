import React from 'react';
import { useHistory } from 'react-router-dom';
import { Profile } from '../../generated/graphql';
import * as uuid from 'uuid';
import './CondensedProfile.css';

interface iCondensedProfile {
  profile: Profile;
  toggleShowMessage: (profile: Profile) => void;
}

const CondensedProfile: React.FC<iCondensedProfile> = (props) => {
  const { profile, toggleShowMessage } = props;
  const userName = profile?.user?.first_name + ' ' + profile?.user?.last_name;
  const history = useHistory();

  function typedKeys<T>(o: T): (keyof T)[] {
    // type cast should be safe because that's really what Object.keys() does
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
      <li key={uuid.v4()} className="li_highlight">
        {k}
      </li>
    ));
  };

  const handleMessageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleShowMessage(profile);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/lhsd/profile/${profile?.user?.id}`);
  };

  return (
    <div className="CondensedProfile clickable" onClick={handleContainerClick}>
      <div className="CondensedProfile_inner"></div>
      <div className="CondensedProfile_user">
        <img src={profile?.avatar || ''} alt={userName + "'s profile picture"} />
        <div className="CondensedProfile_user_info">
          <p className="bold">{userName}</p>
          <p>
            <span className="bold">Neighborhood:</span> {profile?.neighborhood}
          </p>
        </div>
      </div>
      <div className="CondensedProfile_help">
        <p className="bold">Requesting Help With:</p>
        <ul className="CondensedProfile_help_list">{profile?.help_options && getHelpOptions()}</ul>
      </div>
      <div className="CondensedProfile_story">
        <p className="bold">My Story</p>
        <div className="CondensedProfile_story_container">{profile?.story}</div>
      </div>
      <div className="button emphasis_bg_color dark_text_color bold" onClick={handleMessageClick}>
        Message
      </div>
    </div>
  );
};

export default CondensedProfile;
