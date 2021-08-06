import React, {useEffect, useState} from 'react';
import {useMemo} from 'react';
import {useCallback} from 'react';
import {createContext} from 'use-context-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  useEffect(() => {
    AsyncStorage.getItem('@user').then(
      user => user && setUser(JSON.parse(user)),
    );
  }, []);

  const onLogin = useCallback(async () => {
    console.log('on login...');
    setUser({});
    AsyncStorage.setItem('@user', JSON.stringify({}));
  }, []);

  const isLoggedIn = useMemo(() => !!user, [user]);

  return (
    <AuthenticationContext.Provider
      value={{isLoggedIn, user, onLogin, toggleTheme}}>
      {children}
    </AuthenticationContext.Provider>
  );
}
