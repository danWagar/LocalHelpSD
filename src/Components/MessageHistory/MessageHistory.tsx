import React from 'react';
import { useGetMessageHistoryQuery } from '../../generated/graphql';
import './MessageHistory.css';

interface iMessageHistory {
  receiver_id: number;
  sender_id: number;
}

const MessageHistory: React.FC<iMessageHistory> = (props) => {
  const { sender_id, receiver_id } = props;

  const { data, loading, error } = useGetMessageHistoryQuery({
    variables: {
      sender_id: sender_id,
      receiver_id: receiver_id,
    },
  });

  const TStoDisplayDate = (tsStr: string) => {
    console.log(tsStr);
    const ts = parseInt(tsStr);

    const date = new Date();
    date.setTime(ts);
    date.setMinutes(date.getMinutes());
    console.log(date.toString());
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toJSON().slice(8, 10);
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (time.charAt(0) === '0') time = time.slice(1);

    console.log(month + ' ' + day);
    console.log(time);

    return { day: month + ' ' + day, time: time };
  };

  const parseMsgHistory = () => {
    return data?.getMessageHistory?.map((msg) => {
      const dateTime = TStoDisplayDate(msg?.date_sent!);
      return (
        <p className="MessageHistory_message">
          <span>{dateTime.day + ' ' + dateTime.time}</span>
          <span>{msg?.subject}</span>
          <span>{msg?.body}</span>
        </p>
      );
    });
  };

  if (loading) return <div>Loading</div>;

  return <div className="MessageHistory">{parseMsgHistory()}</div>;
};

export default MessageHistory;
