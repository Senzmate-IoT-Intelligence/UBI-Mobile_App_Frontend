import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authnavigator from './navigation/Authnavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import NavigationTheme from './navigation/NavigationTheme';
import { StripeProvider } from "@stripe/stripe-react-native";
const Index = () => {
  const authStatus = true;

  return (
    <StripeProvider publishableKey="pk_test_51LA5tHSFtRtwCUyrnMJ2pFWsx14Sw7qvFBx7WlW86mLWfwV2vKotkDmh1DWHCt02WNgpx953OzHNRIWrxtCil3Ii00uq3uUUFm">
      <NavigationContainer theme={NavigationTheme}>
        {authStatus ? <DrawerNavigator /> : <Authnavigator />}
      </NavigationContainer>
    </StripeProvider>
  );
};

export default Index;
