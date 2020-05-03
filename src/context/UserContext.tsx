import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type Context = {
  userName: string;
  userId: number | string;
  setUserName: Dispatch<SetStateAction<string>>;
  setUserId: Dispatch<SetStateAction<number | string>>;
};

const initialContext: Context = {
  userName: '',
  userId: '',
  setUserName: (value: SetStateAction<string>) => {},
  setUserId: (value: SetStateAction<number | string>) => {}
};

const UserContext = createContext<Context>(initialContext);

const UserContextProvider: React.FC = props => {
  const [userName, setUserName] = useState<string>(initialContext.userName);
  const [userId, setUserId] = useState<number | string>(initialContext.userId);

  return (
    <UserContext.Provider value={{ userName, setUserName, userId, setUserId }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
