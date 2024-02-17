// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Splash from './src/screens/Splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from './src/screens/Home';
import Favorites from './src/screens/Favorites';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let icon;
        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/icons/tabs/home_active.png')
            : require('./src/assets/icons/tabs/home.png')
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/icons/tabs/profile_active.png')
            : require('./src/assets/icons/tabs/profile.png')
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/icons/tabs/bookmark_active.png')
            : require('./src/assets/icons/tabs/bookmark.png')
        }
        return <Image style={{ width: 24, height: 24 }} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: '#DADADA' },
    })} >
    <Tab.Screen name='Home' component={Home} />
    <Tab.Screen name='Favorites' component={Favorites} />
    <Tab.Screen name='Profile' component={Profile} />
  </Tab.Navigator>
);

function App() {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <>
            <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;