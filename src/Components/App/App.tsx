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
import {
  useGetUserMessageThreadsQuery,
  MessageThread,
  useMessageThreadUpdatedSubscription,
} from '../../generated/graphql';
import './App.css';

interface matchParams {
  id: string;
}

function App() {
  const [showMessageNav, setShowMessageNav] = useState<boolean>(false);
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

  if (subscription.data?.messageThreadUpdated) userMessageThreads.refetch();

  if (storedUserString && !user.email) {
    const storedUser = JSON.parse(localStorage.getItem('user') as string) as User;
    setUser(storedUser);
  }

  // if (messageThreads.length > 0) {
  //   messageThreads.some((thread) => thread.notify_user === user.id);
  // }

  if (messageThreads.length > 0) {
    messageThreads.forEach((thread) => {
      console.log('notify_user is ' + thread.notify_user);
      console.log('user id is ', user.id);
      if (thread.notify_user === user.id) {
        newMessageCount++;
      }
    });

    console.log('there are ' + newMessageCount + ' unread threads');
  }

  const toggleShowMessageNav = () => {
    setShowMessageNav(!showMessageNav);
  };

  console.log('newMessageCount is ', newMessageCount);

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
      {showMessageNav && <MessageNav toggleShowMessageNav={toggleShowMessageNav} />}
    </>
  );
}

export default App;
