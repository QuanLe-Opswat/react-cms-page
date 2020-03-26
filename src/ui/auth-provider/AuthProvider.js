import React, { useEffect, useState } from 'react';
import AuthHelper from '../../service/AuthHelper';

export const UserContext = React.createContext(AuthHelper.getUser());

const ID = 'AuthProvider';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthHelper.registerChange(ID, (user) => setUser(user));

    return function() {
      AuthHelper.unregisterChange(ID);
    };
  }, []);

  return <UserContext.Provider value={user}>
    {children}
  </UserContext.Provider>;
};

export default AuthProvider;