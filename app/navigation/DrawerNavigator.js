import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PolicyDetailsScreen from '../screens/PolicyDetails';
import MessageScreen from '../screens/MessageScreen';
import NotoficationScreen from '../screens/NotoficationScreen';
import PaymentNavigator from './PaymentNavigator';
import TabNavigator from './TabNavigator';
import TripNavigator from './TripNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import routes from './routes';
import {colors} from '../theme/colors';
import SettingScreen from '../screens/SettingScreen';
import PaymentHistoryNavigator from './PaymentHistoryNavigator';
const Drawer = createDrawerNavigator();
import { StripeProvider } from '@stripe/stripe-react-native';

const DrawerNavigator = () => {
  return (
    <StripeProvider publishableKey="pk_test_51LA5tHSFtRtwCUyrnMJ2pFWsx14Sw7qvFBx7WlW86mLWfwV2vKotkDmh1DWHCt02WNgpx953OzHNRIWrxtCil3Ii00uq3uUUFm">
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={({navigation}) => ({
        headerShown: false,
        drawerType: 'slide',
        drawerActiveTintColor: colors.primary,
        drawerActiveBackgroundColor: colors.white,
        drawerInactiveTintColor: colors.black,
        drawerInactiveBackgroundColor: colors.white,
      })}>
      <Drawer.Screen
        name={routes.UBIAPP}
        component={TabNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.HOME}
        component={TabNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.PAYMENTHISTORY}
        component={PaymentHistoryNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="cc-amazon-pay" size={size} color={color} />
          ),
        }}
      />
 
<Drawer.Screen
        name={routes.PAYMENT}
        component={PaymentNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="cc-amazon-pay" size={size} color={color} />
          ),
        }}
      />


      <Drawer.Screen
        name={routes.TRIPHISTORY}
        component={TripNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="car" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={routes.POLICYDETAILS}
        component={PolicyDetailsScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5
              name="file-powerpoint"
              size={size + 5}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.SETTINGS}
        component={SettingScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="cog" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={'Logout'}
        component={NotoficationScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    </StripeProvider>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});
