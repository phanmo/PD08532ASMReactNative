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
import Profile from './src/screens/Profile';
import ProductDetails from './src/screens/ProductDetails';
import Cart from './src/screens/Cart';
import Favorite from './src/screens/Favorite';
import { UserProvider } from './src/UserContext';

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
        } else if (route.name === 'Favorite') {
          icon = focused
            ? require('./src/assets/icons/tabs/heart_active.png')
            : require('./src/assets/icons/tabs/heart.png')
        } else if (route.name === 'Cart') {
          icon = focused
            ? require('./src/assets/icons/tabs/cart_active.png')
            : require('./src/assets/icons/tabs/cart.png')
        }else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/icons/tabs/profile_active.png')
            : require('./src/assets/icons/tabs/profile.png')
        }
        return <Image style={{ width: 24, height: 24 }} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: '#DADADA' },
    })} >
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Favorite' component={Favorite} />
    <Tab.Screen name='Cart' component={Cart} />
    <Tab.Screen name='Profile' component={Profile} />
  </Tab.Navigator>
);

function App() {

  const isSignedIn = true;
  return (
  <UserProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* {isSignedIn ? (
          <>
            <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

          </>
        )} */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  </UserProvider>
  );
}

export default App;