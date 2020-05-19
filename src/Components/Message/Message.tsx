import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ProfileType, useMutate_MessagesMutation, useGetMessageThreadQuery } from '../../generated/graphql';
import { messageFormDataType } from '../../types';
import MessageHistory from '../MessageHistory/MessageHistory';
import { UserContext } from '../../context/UserContext';
import './Message.css';

interface iMessage {
  recipient: ProfileType;
}

const Message: React.FC<iMessage> = (props) => {
  const { recipient } = props;

  const [minimize, setMinimize] = useState<boolean>(true);

  const { user } = useContext(UserContext);

  const { handleSubmit, register, errors } = useForm<messageFormDataType>();

  const MessageThreadQuery = useGetMessageThreadQuery({
    variables: {
      created_by: user.id,
      recipient: recipient.user?.id!,
    },
  });

  const [messagesMutation, { data, loading, error }] = useMutate_MessagesMutation();

  if (loading || MessageThreadQuery.loading) return <div>Loading</div>;

  const threadID = MessageThreadQuery?.data?.getMessageThread?.id;

  const onSubmit = (data: messageFormDataType) => {
    console.log('threadID is ', threadID);
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
    console.log('minimize');
  };

  console.log(threadID);

  return (
    <div className="Message">
      <MessageHistory thread_id={threadID!} />
      <div className="Message_header">
        <img
          className="Message_header_img"
          src={recipient.avatar as string}
          alt={recipient?.user?.first_name + ' ' + recipient?.user?.last_name + `'s avatar`}
        />
        <p className="bold">{recipient?.user?.first_name + ' ' + recipient?.user?.last_name}</p>
        <div className="Message_minimize clickable" onClick={handleMinimize}></div>
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
