import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useGetUserMessageThreadsQuery, Profile } from '../../generated/graphql';
import Message from '../Message/Message';
import MessageNavItem from '../MessageNavItem/MessageNavItem';
import './MessageNav.css';

interface iMessageNav {
  toggleShowMessageNav: () => void;
}

interface iMessageInfo {
  profile: Profile;
  threadID: number;
}

const MessageNav: React.FC<iMessageNav> = (props) => {
  const { toggleShowMessageNav } = props;
  const { user } = useContext(UserContext);

  const [messageInfo, setMessageInfo] = useState<iMessageInfo | null>(null);

  const toggleShowMessage = (profile?: Profile, threadID?: number) => {
    if (messageInfo && profile?.user?.id === messageInfo.profile.user_id) setMessageInfo(null);
    else if (profile && threadID) setMessageInfo({ profile: profile, threadID: threadID });
  };

  const handleMinimize = () => {
    toggleShowMessageNav();
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
        <div className="MessageNav_header bold">
          <span>Your Messages</span>
          <div className="Message_minimize_container clickable" onClick={handleMinimize}>
            <div className="Message_minimize"></div>
          </div>
        </div>
        <ul className="MessageNav_list">
          {data?.getUserMessageThreads?.map((thread) => {
            return <MessageNavItem key={thread?.id} thread={thread!} toggleShowMessage={toggleShowMessage} />;
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
