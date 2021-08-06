import {useContextSelector} from 'use-context-selector';
import {AuthenticationContext} from '@context/authentication/AuthenticationContext';

export function useLogin() {
  const isLoggedIn = useContextSelector(
    AuthenticationContext,
    authentication => authentication.isLoggedIn,
  );

  const user = useContextSelector(
    AuthenticationContext,
    authentication => authentication.user,
  );

  const onLogin = useContextSelector(
    AuthenticationContext,
    authentication => authentication.onLogin,
  );

  return {
    isLoggedIn,
    user,
    onLogin,
  };
}
