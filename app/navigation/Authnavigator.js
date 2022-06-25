import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import KeyVerifyScreen from '../screens/KeyVerifyScreen';
import ForgotPassword from '../screens/ForgotPassword';
import MapViewScreen from '../screens/MapViewScreen';
import routes from './routes';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import Drawer from '../navigation/DrawerNavigator';
import ChoseLocation from '../screens/ChoseLocation';


import { NavigationContainer } from '@react-navigation/native';
import FlashMessage  from "react-native-flash-message";

const Stack = createNativeStackNavigator();


const Authnavigator = () => (
  <>
  <Stack.Navigator
    mode="modal"
    initialRouteName="Welcome"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={routes.SIGNIN} component={SignInScreen} />
    <Stack.Screen name={routes.KEYVERIFY} component={KeyVerifyScreen} />
    <Stack.Screen name={routes.SIGNUP} component={SignUpScreen} />
    <Stack.Screen name={routes.FORGOTPASSWORD} component={ForgotPassword} />
    <Stack.Screen name={"MapView"} component={MapViewScreen}/>
    <Stack.Screen name={"Drawer"} component={Drawer}/>
    <Stack.Screen name={"choselocation"} component={ChoseLocation}/>
  </Stack.Navigator>
  
    <FlashMessage
    position="top"
    >
    </FlashMessage> 
    </>

);

export default Authnavigator;
