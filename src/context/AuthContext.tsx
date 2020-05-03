import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import TokenService from '../services/token-service';

type Props = {
  children: React.ReactNode;
};

type Context = {
  hasToken: boolean;
  setHasToken: Dispatch<SetStateAction<boolean>>;
};

const initialContext: Context = {
  hasToken: TokenService.hasAuthToken(),
  setHasToken: (value: SetStateAction<boolean>) => {}
};

const AuthContext = createContext<Context>(initialContext);

const AuthContextProvider = ({ children }: Props): JSX.Element => {
  const [hasToken, setHasToken] = useState<boolean>(initialContext.hasToken);
  console.log('in context hasToken is ', hasToken);

  return <AuthContext.Provider value={{ hasToken, setHasToken }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
