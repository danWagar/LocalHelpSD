import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  Profile,
  useMutate_MessagesMutation,
  useGetMessageThreadQuery,
  useMessageAddedSubscription,
  Message as MessageType,
  useGetMessageHistoryQuery,
  GetMessageHistoryDocument,
  GetMessageHistoryQuery,
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

  const { user } = useContext(UserContext);

  const { handleSubmit, register, errors } = useForm<messageFormDataType>();

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

  useMessageAddedSubscription({
    variables: {},
  });

  const [messagesMutation] = useMutate_MessagesMutation();

  const onSubmit = (formData: messageFormDataType) => {
    messagesMutation({
      variables: {
        thread_id: threadID || null,
        sender_id: user.id,
        receiver_id: recipient.user?.id!,
        subject: formData.subject,
        body: formData.body,
      },
      update: (cache, { data }) => {
        const staleData = cache.readQuery<GetMessageHistoryQuery>({
          query: GetMessageHistoryDocument,
          variables: { thread_id: threadID },
        });
        const newMsg = data?.postMessage!;
        const staleDataArray = staleData?.getMessageHistory!;

        cache.writeQuery({
          query: GetMessageHistoryDocument,
          variables: { thread_id: threadID },
          data: { getMessageHistory: [...staleDataArray, newMsg] },
        });
      },
    });
  };

  const handleMinimize = () => {
    toggleShowMessage();
  };

  if (MessageThreadQuery.loading) return <div>Loading</div>;
  return (
    <div className="Message">
      <MessageHistory msgHistory={msgHistoryResult.data?.getMessageHistory! as MessageType[]} />
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
