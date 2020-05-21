import React, { useContext, useEffect } from 'react';
import { useMessageAddedSubscription, Message } from '../../generated/graphql';
import { UserContext } from '../../context/UserContext';
import classNames from 'classnames';
// import useFetchMessageHistory from '../../myHooks/useFetchMessageHistory';
import './MessageHistory.css';

interface iMessageHistory {
  thread_id: number;
  msgHistory: Message[];
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
  const { thread_id, msgHistory } = props;
  const { user } = useContext(UserContext);

  // const messageHistory = useFetchMessageHistory(thread_id);

  // const { ...result } = useGetMessageHistoryQuery({
  //   variables: {
  //     thread_id: thread_id,
  //   },
  //   skip: !thread_id,
  // });

  // const subscribeToNewMessages = () =>
  //   subscribeToMore({
  //     document: MessageAddedDocument,
  //     variables: {},
  //     updateQuery: (prev, { subscriptionData }) => {
  //       console.log(subscriptionData.data);
  //       if (!subscriptionData.data) return prev;
  //       const newMessageItem = subscriptionData.data.getMessageHistory;

  //       return Object.assign({}, prev, {
  //         entry: {
  //           message: [newMessageItem, ...prev.getMessageHistory!],
  //         },
  //       });
  //     },
  //   });

  useEffect(() => {
    console.log('message thread remoutned');
  }, []);

  const TStoDisplayDate = (ts: number) => {
    const date = new Date();
    date.setTime(ts);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleDateString('defautl', { day: 'numeric' });
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
    let messages = msgHistory;
    // const newMsg = subscription.data?.messageAdded;
    // if (newMsg && messages && newMsg.id !== messages[messages.length - 1].id) messages.push(newMsg);
    console.log(messages);
    return messages?.map((msg) => {
      const milliseconds = parseInt(msg?.date_sent!);
      const dateTime = TStoDisplayDate(milliseconds);
      const timeDifference = milliseconds - lastMsgMilliseconds;
      const sentByUser = msg?.sender_id === user.id;
      const alignment = {
        align_start: !sentByUser,
        align_end: sentByUser,
      };
      const jsx = (
        <li key={msg.id} className="MessageHistory_Message">
          <div className="MessageHistory_message_container">
            {getDateTimeJSX(dateTime, lastMsgDate, timeDifference, alignment)}
            <span className={classNames('MessageHistory_subject bold', alignment)}>{msg?.subject}</span>
            <span className={classNames('MessageHistory_body', alignment)}>{msg?.body}</span>
          </div>
        </li>
      );
      lastMsgDate = dateTime.monthDay;
      lastMsgMilliseconds = milliseconds;
      return jsx;
    });
  };

  return (
    <div className="MessageHistory">
      <ul>{parseMsgHistory()}</ul>
    </div>
  );
};

export default MessageHistory;
