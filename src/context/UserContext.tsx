import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

type Context = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const initialContext: Context = {
  user: { id: -1, email: '', firstName: '', lastName: '' },
  setUser: (value: SetStateAction<User>) => {},
};

const UserContext = createContext<Context>(initialContext);

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User>(initialContext.user);

  return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
