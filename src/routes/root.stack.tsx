import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/Home';
import MovieDetailScreen from '@screens/MovieDetail';
import {useIsLoggedIn} from '@hooks/useIsLoggedIn';
import {
  AppDrawerParams,
  HomeStackParams,
  AuthenticationStackParams,
  RootStackParams,
} from './types';
import LoginScreen from 'screens/Login';

const HomeStackNavigator = createNativeStackNavigator<HomeStackParams>();
function HomeStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name={'Home'} component={HomeScreen} />
      <HomeStackNavigator.Screen
        name={'MovieDetail'}
        component={MovieDetailScreen}
      />
    </HomeStackNavigator.Navigator>
  );
}

const AppDrawerNavigator = createDrawerNavigator<AppDrawerParams>();
function AppDrawer() {
  return (
    <AppDrawerNavigator.Navigator screenOptions={{header: () => null}}>
      <AppDrawerNavigator.Screen name={'HomeStack'} component={HomeStack} />
    </AppDrawerNavigator.Navigator>
  );
}

const AuthenticationStackNavigator =
  createNativeStackNavigator<AuthenticationStackParams>();
function AuthenticationStack() {
  return (
    <AuthenticationStackNavigator.Navigator>
      <AuthenticationStackNavigator.Screen
        name={'Login'}
        component={LoginScreen}
      />
    </AuthenticationStackNavigator.Navigator>
  );
}

const RootStackNavigator = createNativeStackNavigator<RootStackParams>();
export default function RootStack() {
  const {isLoggedIn} = useIsLoggedIn();

  return (
    <RootStackNavigator.Navigator screenOptions={{header: () => null}}>
      {isLoggedIn ? (
        <RootStackNavigator.Screen name={'App'} component={AppDrawer} />
      ) : (
        <RootStackNavigator.Screen
          name={'Authentication'}
          component={AuthenticationStack}
        />
      )}
    </RootStackNavigator.Navigator>
  );
}
