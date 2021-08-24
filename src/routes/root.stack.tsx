import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

// Screens
import HomeScreen from '@screens/Home';
import MovieDetailScreen from '@screens/MovieDetail';
import LoginScreen from '@screens/Login';

// Hooks
import {useIsLoggedIn} from '@hooks/useIsLoggedIn';

// Types
import {
  AppDrawerParams,
  HomeStackParams,
  AuthenticationStackParams,
  RootStackParams,
} from './types';

const HomeStackNavigator = createSharedElementStackNavigator<HomeStackParams>();
function HomeStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name={'Home'} component={HomeScreen} />
      <HomeStackNavigator.Screen
        name={'MovieDetail'}
        component={MovieDetailScreen}
        sharedElements={route => {
          const {id} = route.params;
          return [`item.${id}.photo`];
        }}
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
  createStackNavigator<AuthenticationStackParams>();
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

const RootStackNavigator = createStackNavigator<RootStackParams>();
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
