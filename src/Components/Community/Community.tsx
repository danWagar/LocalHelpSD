import React, { useState, useContext } from 'react';
import CondensedProfile from '../CondensedProfile/CondensedProfile';
import { useGetProfileHelpInfoQuery, useGetProfileMatchesQuery, ProfileType } from '../../generated/graphql';
import { withApollo, WithApolloClient } from 'react-apollo';
import { UserContext } from '../../context/UserContext';
import Message from '../Message/Message';
import './Community.css';

interface iCommunity {}

type Props = WithApolloClient<iCommunity>;

const Community: React.FC<Props> = ({ client }) => {
  const { user } = useContext(UserContext);

  const [messageTo, setMessageTo] = useState<ProfileType | null>(null);

  const toggleShowMessage = (profile: ProfileType) => {
    if (messageTo) setMessageTo(null);
    else setMessageTo(profile);
  };

  const res = useGetProfileHelpInfoQuery({ variables: { user_id: user.id } });
  console.log(res);

  const help = res?.data?.profile?.help!;
  const help_options = res?.data?.profile?.help_options!;
  const vars = { ...help, ...help_options };
  delete vars['__typename'];

  console.log(vars);

  const { data, loading, error } = useGetProfileMatchesQuery({
    variables: { ...vars },
  });

  if (loading) return <div> LOADING</div>;
  console.log(error);
  console.log(data);

  return (
    <div className="Community">
      {data?.getProfileMatches?.map((profile) => {
        console.log(profile);
        return <CondensedProfile profile={profile!} toggleShowMessage={toggleShowMessage} />;
      })}
      {messageTo && <Message receiver={messageTo} />}
    </div>
  );
};

export default withApollo(Community);
