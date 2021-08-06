export type RootStackParams = {
  App: undefined;
  Authentication: undefined;
};

export type AuthenticationStackParams = {
  Login: undefined;
};

export type AppDrawerParams = {
  HomeStack: undefined;
};

export type HomeStackParams = {
  Home: undefined;
  MovieDetail: {
    id: number;
  };
};
