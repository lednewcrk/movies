import {useContextSelector} from 'use-context-selector';
import {AuthenticationContext} from '@context/authentication/AuthenticationContext';

export function useToggleTheme() {
  const toggleTheme = useContextSelector(
    AuthenticationContext,
    authentication => authentication.toggleTheme,
  );

  return {
    toggleTheme,
  };
}
