import React, {createContext, useState} from 'react'

const UserContext = createContext({});

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<{name: string} | {}>({});

  return (
    <UserContext.Provider value={{user}}>
      {props.children}
    </UserContext.Provider>
  )
} 

export default UserContextProvider;