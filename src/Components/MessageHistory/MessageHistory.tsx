import React, { useState } from 'react';
import { useGetMessageHistoryQuery } from '../../generated/graphql';
import './MessageHistory.css';

interface iMessageHistory {
  receiver_id: number;
  sender_id: number;
}

type dateTimeType = {
  monthDay: string;
  time: string;
};

const MessageHistory: React.FC<iMessageHistory> = (props) => {
  const { sender_id, receiver_id } = props;
  //const { lastMessageDateTime, setLastMessageDateTime } = useState<dateTimeType>({monthDay: '', time: ''});

  const { data, loading, error } = useGetMessageHistoryQuery({
    variables: {
      sender_id: sender_id,
      receiver_id: receiver_id,
    },
  });

  const TStoDisplayDate = (ts: number) => {
    const date = new Date();
    date.setTime(ts);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toJSON().slice(8, 10);
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (time.charAt(0) === '0') time = time.slice(1);
    return { monthDay: month + ' ' + day, time: time };
  };

  const getDateTimeJSX = (dateTime: dateTimeType, lastMsgDate: string, timeDifference: number) => {
    if (dateTime.monthDay !== lastMsgDate) {
      return (
        <>
          <div className="MessageHistory_date">{dateTime.monthDay}</div>
          <div className="MessageHistory_time">{dateTime.time}</div>
        </>
      );
    } else if (timeDifference > 600000) {
      return <div className="MessageHistory_time">{dateTime.time}</div>;
    }
  };

  const parseMsgHistory = () => {
    let lastMsgDate = '';
    let lastMsgMilliseconds = 0;
    return data?.getMessageHistory?.map((msg) => {
      const milliseconds = parseInt(msg?.date_sent!);
      const dateTime = TStoDisplayDate(milliseconds);
      const timeDifference = milliseconds - lastMsgMilliseconds;
      const jsx = (
        <div className="MessageHistory_message">
          {getDateTimeJSX(dateTime, lastMsgDate, timeDifference)}
          <span>{msg?.subject}</span>
          <span>{msg?.body}</span>
        </div>
      );
      lastMsgDate = dateTime.monthDay;
      lastMsgMilliseconds = milliseconds;
      return jsx;
    });
  };

  if (loading) return <div>Loading</div>;

  return <div className="MessageHistory">{parseMsgHistory()}</div>;
};

export default MessageHistory;
