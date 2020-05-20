import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useGetUserMessageThreadsQuery, ProfileType } from '../../generated/graphql';
import Message from '../Message/Message';
import MessageNavItem from '../MessageNavItem/MessageNavItem';
import './MessageNav.css';

interface iMessageInfo {
  profile: ProfileType;
  threadID: number;
}

const MessageNav: React.FC = () => {
  const { user } = useContext(UserContext);

  const [messageInfo, setMessageTo] = useState<iMessageInfo | null>(null);

  const toggleShowMessage = (profile?: ProfileType, threadID?: number) => {
    if (messageInfo) setMessageTo(null);
    else if (profile && threadID) setMessageTo({ profile: profile, threadID: threadID });
  };

  const { data, loading, error } = useGetUserMessageThreadsQuery({
    variables: {
      user_id: user.id,
    },
  });

  if (loading) return <div>Loading</div>;

  return (
    <>
      <div className="MessageNav">
        <div className="MessageNav_header bold">Your Messages</div>
        <ul className="MessageNav_list">
          {data?.getUserMessageThreads?.map((thread) => {
            return <MessageNavItem thread={thread!} toggleShowMessage={toggleShowMessage} />;
          })}
        </ul>
      </div>
      {messageInfo && (
        <Message
          recipient={messageInfo?.profile!}
          threadID={messageInfo?.threadID}
          toggleShowMessage={toggleShowMessage}
        />
      )}
    </>
  );
};

export default MessageNav;
