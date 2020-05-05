import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type Context = {
  userName: string | null;
  userId: number | null;
  setUserName: Dispatch<SetStateAction<string | null>>;
  setUserId: Dispatch<SetStateAction<number | null>>;
};

const initialContext: Context = {
  userName: null,
  userId: null,
  setUserName: (value: SetStateAction<string | null>) => {},
  setUserId: (value: SetStateAction<number | null>) => {},
};

const UserContext = createContext<Context>(initialContext);

const UserContextProvider: React.FC = (props) => {
  const [userName, setUserName] = useState<string | null>(initialContext.userName);
  const [userId, setUserId] = useState<number | null>(initialContext.userId);

  return (
    <UserContext.Provider value={{ userName, setUserName, userId, setUserId }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
