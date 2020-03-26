import React, { useContext } from 'react';
import { UserContext } from '../../ui/auth-provider/AuthProvider';

const HomePage = () => {

  const userContext = useContext(UserContext);

  return (<>
      <div>
        {userContext ? userContext.email : 'not login'}
      </div>
    </>
  );
};

export default HomePage;
