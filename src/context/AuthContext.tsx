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
  setHasToken: (): void => {
    throw new Error('setContext function must be overridden');
  }
  // setAuthContext: (): void => {
  //   throw new Error('setContext function must be overridden');
  // }
};

const AuthContext = createContext<Context>(initialContext);

const AuthContextProvider = ({ children }: Props): JSX.Element => {
  const [hasToken, setHasToken] = useState<boolean>(initialContext.hasToken);

  return <AuthContext.Provider value={{ hasToken, setHasToken }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
