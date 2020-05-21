import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  Profile,
  useMutate_MessagesMutation,
  useGetMessageThreadQuery,
  useMessageAddedSubscription,
  Message as MessageType,
  useGetMessageHistoryQuery,
} from '../../generated/graphql';
import { messageFormDataType } from '../../types';
import MessageHistory from '../MessageHistory/MessageHistory';
import { UserContext } from '../../context/UserContext';
import './Message.css';

interface iMessage {
  recipient: Profile;
  threadID?: number | null;
  toggleShowMessage: (profile?: Profile) => void;
}

const Message: React.FC<iMessage> = (props) => {
  const { recipient, toggleShowMessage } = props;
  let threadID = props.threadID;

  //const [msgHistory, setMsgHistory] = useState<MessageType[]>([]);

  const { user } = useContext(UserContext);

  const { handleSubmit, register, errors } = useForm<messageFormDataType>();

  useEffect(() => {
    console.log('remounting Message');
  }, []);

  const MessageThreadQuery = useGetMessageThreadQuery({
    variables: {
      created_by: user.id,
      recipient: recipient.user?.id!,
    },
    skip: threadID !== null,
  });

  threadID = MessageThreadQuery.data?.getMessageThread?.id || props.threadID;

  const msgHistoryResult = useGetMessageHistoryQuery({
    variables: {
      thread_id: threadID!,
    },
    skip: !threadID,
  });

  const subscription = useMessageAddedSubscription({
    variables: {},
  });

  const [messagesMutation, { data, loading, error }] = useMutate_MessagesMutation();

  const onSubmit = (data: messageFormDataType) => {
    messagesMutation({
      variables: {
        thread_id: threadID || null,
        sender_id: user.id,
        receiver_id: recipient.user?.id!,
        subject: data.subject,
        body: data.body,
      },
    });
  };

  const handleMinimize = () => {
    toggleShowMessage();
  };

  let msgHistory: MessageType[] = [];
  if (!msgHistoryResult.loading && msgHistoryResult.data)
    msgHistory = [...msgHistoryResult.data?.getMessageHistory!] as MessageType[];
  if (!subscription.loading && subscription.data) msgHistory.push(subscription.data?.messageAdded!);

  if (MessageThreadQuery.loading) return <div>Loading</div>;
  return (
    <div className="Message">
      <MessageHistory thread_id={threadID!} msgHistory={msgHistory} />
      <div className="Message_header">
        <img
          className="small_avatar"
          src={recipient.avatar as string}
          alt={recipient?.user?.first_name + ' ' + recipient?.user?.last_name + `'s avatar`}
        />
        <p className="bold">{recipient?.user?.first_name + ' ' + recipient?.user?.last_name}</p>
        <div className="Message_minimize_container clickable" onClick={handleMinimize}>
          <div className="Message_minimize"></div>
        </div>
      </div>
      <form className="Message_container" onSubmit={handleSubmit(onSubmit)}>
        <label className="Message_subject">
          <span className="bold">Subject</span>
          <input name="subject" ref={register} type="text" placeholder="Optional" />
        </label>
        <textarea className="Message_body" name="body" ref={register} placeholder="...write a message" />
        <button className="primary_bg_color light_text_color bold" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Message;
