import {StyleSheet, ScrollView, StatusBar, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme/index';
import newApi from '../../config';
import {useEffect} from 'react/cjs/react.production.min';
const SignInScreen = () => {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [nic, setnic] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const navigation = useNavigation();

  const handleSignUp = () => {
    console.log(email, phone, nic, password, confirmPassword);

    // checking password and confirm password
    if (password == confirmPassword) {
      newApi
        .post('/create', {
          // making api request
          email: email,
          password: password,
          phone: phone,
          nic: nic,
        })
        .then(function (response) {
          var output = response.data;
          //console.log(output.message);
          ToastAndroid.show(output.message, ToastAndroid.SHORT);
        })
        .catch(function (error) {
          console.log(error);
        });

      //navigation.navigate(routes.WELCOME);
    } else {
      ToastAndroid.show('Password not match', ToastAndroid.SHORT);
    }
  };

  const handleSignIn = () => {
    console.log(email);
    navigation.navigate(routes.SIGNIN);
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0.2} center middle>
          <Typography bold white size={30}>
            Welcome to UBI!
          </Typography>
          <Typography bold white>
            Sign Up
          </Typography>
        </Block>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Typography black style={styles.label}>
              Email
            </Typography>
            <TextBox
              email
              icon="mail"
              onChangeText={setEmail}
              autoCapitalize="none"
              placeholder="Your email"
            />

            <Typography black style={styles.label}>
              Phone
            </Typography>
            <TextBox
              phone
              icon="ios-keypad"
              onChangeText={setPhone}
              autoCapitalize="none"
              placeholder="Your phone number"
            />
            <Typography black style={styles.label}>
              NIC
            </Typography>
            <TextBox
              icon="pricetag"
              onChangeText={setnic}
              autoCapitalize="none"
              placeholder="Your NIC"
            />
            <Typography black style={styles.label}>
              Password
            </Typography>
            <TextBox
              icon="lock-closed-sharp"
              onChangeText={setPassword}
              autoCapitalize="none"
              placeholder="Enter password"
              secureTextEntry
            />
            <Typography black style={styles.label}>
              Conform Password
            </Typography>
            <TextBox
              icon="lock-closed-outline"
              onChangeText={setconfirmPassword}
              autoCapitalize="none"
              placeholder="Confirm password"
              secureTextEntry
            />
            <Button
              primary
              shadow
              onPress={() =>
                handleSignUp(email, password, confirmPassword, nic, phone)
              }>
              <Typography center white bold size={15}>
                SIGN UP
              </Typography>
            </Button>
            <Button white shadow onPress={() => handleSignIn()}>
              <Typography center black bold size={15}>
                SIGNIN
              </Typography>
            </Button>
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  linearBg: {
    flex: 1,
  },
  animationBlock: {
    flex: 0.8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  formBlock: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerBlock: {
    backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    paddingLeft: 5,
    marginBottom: 0,
    fontSize: 13,
  },
});
