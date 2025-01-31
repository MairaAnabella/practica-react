import React from 'react';

function useAuthentication(initialUser) {
  const [session, setSession] = React.useState({
    user: initialUser,
  });

  const authentication = React.useMemo(() => ({
    signIn: () => {
      setSession({
        user: {
          name: 'Bharat Kashyap',
          email: 'bharatkashyap@outlook.com',
          image: 'https://unavatar.io/github/netflix',
        },
      });
    },
    signOut: () => {
      setSession(null);
    },
  }), []);

  return { session, authentication };
}

export default useAuthentication;
