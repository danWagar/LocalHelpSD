import React, { useContext } from 'react';
import CondensedProfile from '../CondensedProfile/CondensedProfile';
import { useGetProfileHelpInfoQuery, useGetProfileMatchesQuery } from '../../generated/graphql';
import { withApollo, WithApolloClient } from 'react-apollo';
import { UserContext } from '../../context/UserContext';
import useFetchProfile from '../../myHooks/useFetchProfile';

interface iCommunity {}

type Props = WithApolloClient<iCommunity>;

const Community: React.FC<Props> = ({ client }) => {
  const { user } = useContext(UserContext);

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
    <>
      {data?.getProfileMatches?.map((profile) => {
        console.log(profile);
        return <CondensedProfile profile={profile!} />;
      })}
    </>
  );
};

export default withApollo(Community);
