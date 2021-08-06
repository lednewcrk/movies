import {useContextSelector} from 'use-context-selector';
import {AuthenticationContext} from '@context/authentication/AuthenticationContext';

export function useIsLoggedIn() {
  const isLoggedIn = useContextSelector(
    AuthenticationContext,
    authentication => authentication.isLoggedIn,
  );

  return {
    isLoggedIn,
  };
}
