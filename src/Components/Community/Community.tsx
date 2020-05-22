import React, { useState, useContext } from 'react';
import CondensedProfile from '../CondensedProfile/CondensedProfile';
import { useGetProfileHelpInfoQuery, useGetProfileMatchesQuery, Profile } from '../../generated/graphql';
import { withApollo, WithApolloClient } from 'react-apollo';
import { UserContext } from '../../context/UserContext';
import Message from '../Message/Message';
import './Community.css';

interface iCommunity {}

type Props = WithApolloClient<iCommunity>;

const Community: React.FC<Props> = ({ client }) => {
  const { user } = useContext(UserContext);

  const [messageTo, setMessageTo] = useState<Profile | null>(null);

  const toggleShowMessage = (profile: Profile | undefined) => {
    if (messageTo) setMessageTo(null);
    else if (profile) setMessageTo(profile);
  };

  const res = useGetProfileHelpInfoQuery({ variables: { user_id: user.id } });

  const help = res?.data?.profile?.help!;
  const help_options = res?.data?.profile?.help_options!;
  const vars = { ...help, ...help_options };
  delete vars['__typename'];

  const { data, loading, error } = useGetProfileMatchesQuery({
    variables: { ...vars },
    skip: !help || !help_options,
  });

  if (loading) return <div> LOADING</div>;

  return (
    <div className="Community">
      {data?.getProfileMatches?.map((profile) => {
        //console.log(profile);
        return (
          <CondensedProfile
            key={profile?.user?.id}
            profile={profile!}
            toggleShowMessage={toggleShowMessage}
          />
        );
      })}
      {messageTo && <Message recipient={messageTo} threadID={null} toggleShowMessage={toggleShowMessage} />}
    </div>
  );
};

export default withApollo(Community);
