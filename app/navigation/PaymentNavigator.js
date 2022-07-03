import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PaymentHistoryScreen from '../screens/PaymentHistory';
import routes from './routes';
import PaymentOTP from '../screens/PayementOTP';
import EReceipt from '../screens/EReceipt';
import PaymentSuccess from '../screens/PaymentSuccess';
import Payment from '../screens/Payment';
import MakePayment from '../screens/MakePayment';
import { StripeProvider } from '@stripe/stripe-react-native';
const Stack = createNativeStackNavigator();

const PaymentNavigator = () => {
  return (
    
    <Stack.Navigator mode="card" screenOptions={{ headerShown: false }} >
       
        <Stack.Screen name={routes.PAYMENT} component={Payment} />
  
        <Stack.Screen name={routes.PAYMENTHOME} component={PaymentHistoryScreen} />
        <Stack.Screen name={routes.MAKEPAYMENT} component={MakePayment} />
        <Stack.Screen name={routes.PAYMENTOTP} component={PaymentOTP} />
        <Stack.Screen name={routes.ERECEIPT} component={EReceipt} />
        <Stack.Screen name={routes.PAYMENTSUCCESS} component={PaymentSuccess} />
        
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
