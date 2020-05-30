import React, { useState, useContext } from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { UserContext, User } from '../../context/UserContext';
import Header from '../Header/Header';
import LhsdHeader from '../LhsdHeader/LhsdHeader';
import LandingPage from '../LandingPage/LandingPage';
import FindHelp from '../FindHelp/FindHelp';
import HelpOthers from '../HelpOthers/HelpOthers';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Community from '../Community/Community';
import Home from '../Home/Home';
import MessageNav from '../MessageNav/MessageNav';
import Message from '../Message/Message';
import {
  useGetUserMessageThreadsQuery,
  MessageThread,
  useMessageThreadUpdatedSubscription,
  Profile as ProfileType,
} from '../../generated/graphql';
import './App.css';

interface matchParams {
  id: string;
}

interface iMessageInfo {
  profile: ProfileType;
  threadID: number;
}

function App() {
  const [showMessageNav, setShowMessageNav] = useState<boolean>(false);
  const [messageInfo, setMessageInfo] = useState<iMessageInfo | null>(null);
  const { user, setUser } = useContext(UserContext);
  const storedUserString = localStorage.getItem('user');

  let messageThreads: MessageThread[] = [];
  let newMessageCount = 0;

  const subscription = useMessageThreadUpdatedSubscription({
    variables: {
      user_id: user.id,
    },
    skip: !user,
  });

  const userMessageThreads = useGetUserMessageThreadsQuery({
    variables: {
      user_id: user.id,
    },
    skip: !user,
  });

  if (userMessageThreads.loading) return <div>Loading</div>;

  if (userMessageThreads.data?.getUserMessageThreads)
    messageThreads = userMessageThreads?.data?.getUserMessageThreads as MessageThread[];

  if (subscription.data?.messageThreadUpdated) {
    console.log('refetching userMessageThreads');
    userMessageThreads.refetch();
  }

  if (storedUserString && !user.email) {
    const storedUser = JSON.parse(localStorage.getItem('user') as string) as User;
    setUser(storedUser);
  }

  if (messageThreads.length > 0) {
    messageThreads.forEach((thread) => {
      if (thread.notify_user === user.id) {
        newMessageCount++;
      }
    });
  }

  const toggleShowMessage = (profile?: ProfileType, threadID?: number) => {
    if (messageInfo && profile?.user?.id === messageInfo.profile.user_id) setMessageInfo(null);
    else if (profile && threadID) setMessageInfo({ profile: profile, threadID: threadID });
  };

  const toggleShowMessageNav = () => {
    setShowMessageNav(!showMessageNav);
  };

  return (
    <>
      <Switch>
        <Route
          path="/lhsd"
          component={() => (
            <LhsdHeader handleClickMessageNav={toggleShowMessageNav} newMessageCount={newMessageCount} />
          )}
        />
        <Route path="/" component={() => <Header />} />
      </Switch>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/find-help" component={FindHelp} />
        <Route exact path="/help-others" component={HelpOthers} />
        <Route exact path="/lhsd/home" component={Home} />
        <Route
          exact
          path="/lhsd/profile/:id"
          render={(props: RouteComponentProps<matchParams>) => (
            <Profile profileUserID={parseInt(props.match.params.id!)} />
          )}
        />
        <Route exact path="/lhsd/community" component={Community} />
      </Switch>
      {showMessageNav && (
        <MessageNav toggleShowMessageNav={toggleShowMessageNav} toggleShowMessage={toggleShowMessage} />
      )}
      {messageInfo && (
        <Message
          recipient={messageInfo?.profile!}
          threadID={messageInfo?.threadID}
          toggleShowMessage={toggleShowMessage}
        />
      )}
    </>
  );
}

export default App;
