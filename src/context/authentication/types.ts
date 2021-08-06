export type User = {
  //
} | null;

export type AuthenticationContextType = {
  user: User;
  isLoggedIn: boolean;
  onLogin: () => Promise<void>;
  toggleTheme: () => void;
};

export type AuthenticationProviderType = {
  children: JSX.Element;
  toggleTheme: () => void;
};
