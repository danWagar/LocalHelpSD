import React from 'react';
import { useForm } from 'react-hook-form';
import { ProfileType, useGetProfileQuery } from '../../generated/graphql';
import { messageFormDataType } from '../../types';
import MessageHistory from '../MessageHistory/MessageHistory';
import './Message.css';

interface iMessage {
  receiver: ProfileType;
}

const Message: React.FC<iMessage> = (props) => {
  const { receiver } = props;

  const { handleSubmit, register, errors } = useForm<messageFormDataType>();
  const onSubmit = (data: messageFormDataType) => {
    console.log(data);
  };

  return (
    <div className="Message">
      <MessageHistory />
      <div className="Message_header">
        <img
          className="Message_header_img"
          src={receiver.avatar as string}
          alt={receiver?.user?.first_name + ' ' + receiver?.user?.last_name + `'s avatar`}
        />
        <p className="bold">{receiver?.user?.first_name + ' ' + receiver?.user?.last_name}</p>
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
