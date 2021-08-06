import React, {useState} from 'react';
import {useMemo} from 'react';
import {useCallback} from 'react';
import {createContext} from 'use-context-selector';

import {
  AuthenticationContextType,
  AuthenticationProviderType,
  User,
} from './types';

export const AuthenticationContext = createContext(
  {} as AuthenticationContextType,
);

export function AuthenticationProvider({
  children,
  toggleTheme,
}: AuthenticationProviderType) {
  const [user, setUser] = useState<User>(null);

  const onLogin = useCallback(async () => {
    console.log('on login...');
  }, []);

  const isLoggedIn = useMemo(() => !!user, [user]);

  return (
    <AuthenticationContext.Provider
      value={{isLoggedIn, user, onLogin, toggleTheme}}>
      {children}
    </AuthenticationContext.Provider>
  );
}
