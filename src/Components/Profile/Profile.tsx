import React, { useContext } from 'react';
import { RouteProps, RouteComponentProps } from 'react-router-dom';
import { Profile as ProfileType, useGetProfileQuery } from '../../generated/graphql';
import { UserContext } from '../../context/UserContext';
import * as uuid from 'uuid';
import './Profile.css';

interface matchParams {
  id: string;
}

const Profile: React.FC = (props) => {
  const routeProps = props as RouteComponentProps<matchParams>;
  const profileUserID = parseInt(routeProps.match.params.id);
  const { user } = useContext(UserContext);
  const thisUserID = profileUserID || user.id;

  let profile: ProfileType | undefined;

  const { data, loading, error } = useGetProfileQuery({
    variables: { user_id: thisUserID },
    skip: !!profile && profile?.user?.id === thisUserID,
  });

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) return <div> Oops! Something went wrong. Please try refreshing.</div>;

  if (data?.profile) profile = data?.profile!;

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

  const name = profile?.user?.first_name + ' ' + profile?.user?.last_name;
  return (
    <main className="Profile">
      <div className="Profile_user_header">
        <div className="Profile_user_container">
          <img src={profile?.avatar || ''} alt={name + "'s profile picture"} />
          <div className="Profile_user_info">
            <h2>{name}</h2>
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
