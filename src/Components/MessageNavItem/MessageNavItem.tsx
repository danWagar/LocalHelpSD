import React, { useContext } from 'react';
import { MessageThread, useGetProfileUserInfoQuery, Profile } from '../../generated/graphql';
import { UserContext } from '../../context/UserContext';
import * as uuid from 'uuid';
import './MessageNavItem.css';

interface iMessageNavItem {
  thread: MessageThread;
  toggleShowMessage: (profile: Profile, threadID: number) => void;
}

const MessageNavItem: React.FC<iMessageNavItem> = (props) => {
  const { thread, toggleShowMessage } = props;

  const { user } = useContext(UserContext);

  const { data, loading, error } = useGetProfileUserInfoQuery({
    variables: {
      user_id: getUserID(),
    },
  });

  function getUserID() {
    if (user.id === thread.created_by) return thread.recipient!;
    return thread.created_by!;
  }

  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    toggleShowMessage(data?.profile!, thread.id!);
  };

  if (loading) return <div>Loading</div>;

  const avatar = data?.profile?.avatar;
  const first_name = data?.profile?.user?.first_name;
  const last_name = data?.profile?.user?.last_name;
  const name = first_name + ' ' + last_name;

  return (
    <li className="MessageNavItem clickable" onClick={handleItemClick} key={uuid.v4()}>
      <img className="small_avatar" src={avatar!} alt={`${name}'s avatar`} />
      {name}
    </li>
  );
};

export default MessageNavItem;
