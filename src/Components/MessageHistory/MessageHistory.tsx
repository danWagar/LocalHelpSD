import React, { useContext } from 'react';
import { useGetMessageHistoryQuery } from '../../generated/graphql';
import { UserContext } from '../../context/UserContext';
import classNames from 'classnames';
import './MessageHistory.css';

interface iMessageHistory {
  thread_id: number;
}

type dateTimeType = {
  monthDay: string;
  time: string;
};

type alignmentType = {
  align_start: boolean;
  align_end: boolean;
};

const MessageHistory: React.FC<iMessageHistory> = (props) => {
  const { thread_id } = props;
  const { user } = useContext(UserContext);

  const { data, loading, error } = useGetMessageHistoryQuery({
    variables: {
      thread_id: thread_id,
    },
    skip: !thread_id,
  });

  console.log(data);

  const TStoDisplayDate = (ts: number) => {
    const date = new Date();
    date.setTime(ts);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toJSON().slice(8, 10);
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (time.charAt(0) === '0') time = time.slice(1);
    return { monthDay: month + ' ' + day, time: time };
  };

  const getDateTimeJSX = (
    dateTime: dateTimeType,
    lastMsgDate: string,
    timeDifference: number,
    alignment: alignmentType
  ) => {
    if (dateTime.monthDay !== lastMsgDate) {
      return (
        <>
          <div className="MessageHistory_date">{dateTime.monthDay}</div>
          <div className={classNames('MessageHistory_time', alignment)}>{dateTime.time}</div>
        </>
      );
    } else if (timeDifference > 600000) {
      return <div className={classNames('MessageHistory_time', alignment)}>{dateTime.time}</div>;
    }
  };

  const parseMsgHistory = () => {
    let lastMsgDate = '';
    let lastMsgMilliseconds = 0;
    return data?.getMessageHistory?.map((msg) => {
      const milliseconds = parseInt(msg?.date_sent!);
      const dateTime = TStoDisplayDate(milliseconds);
      const timeDifference = milliseconds - lastMsgMilliseconds;
      const sentByUser = msg?.sender_id === user.id;
      const alignment = {
        align_start: !sentByUser,
        align_end: sentByUser,
      };
      const jsx = (
        <div className="MessageHistory_Message">
          <div className="MessageHistory_message_container">
            {getDateTimeJSX(dateTime, lastMsgDate, timeDifference, alignment)}
            <span className={classNames('MessageHistory_subject bold', alignment)}>{msg?.subject}</span>
            <span className={classNames('MessageHistory_body', alignment)}>{msg?.body}</span>
          </div>
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
