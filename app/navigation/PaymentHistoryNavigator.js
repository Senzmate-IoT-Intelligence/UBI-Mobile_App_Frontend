import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PaymentHistoryScreen from '../screens/PaymentHistory';
import routes from './routes';

const Stack = createNativeStackNavigator();

const PaymentNavigator = () => {
  return (
    <Stack.Navigator mode="card" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.PAYMENTHOME}
        component={PaymentHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
