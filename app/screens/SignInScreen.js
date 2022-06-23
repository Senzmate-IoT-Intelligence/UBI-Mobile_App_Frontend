import {StyleSheet, StatusBar, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme';
import routes from '../navigation/routes';
import newApi from '../../config';
const SignInScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Drawer");
    console.log(email, password);
    // checking password and confirm password
    if (email == '' || password == '') {
      ToastAndroid.show('Username/Password empty', ToastAndroid.SHORT);
    } else {
      newApi
        .post('/signin', {
          // making api request
          email: email,
          password: password,
        })
        .then(function (response) {
          var output = response.data;
          //console.log(output.message);
          // navigation.navigate("Drawer");
          ToastAndroid.show(output.message, ToastAndroid.SHORT);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    //navigation.navigate(routes.WELCOME);
  };

  const handleSignUp = () => {
    console.log(email, password);
    navigation.navigate(routes.KEYVERIFY);
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0.5} center middle>
          <Typography bold white size={30}>
            Welcome to UBI!
          </Typography>
          <Typography bold white>
            Sign In
          </Typography>
        </Block>
        <Animatable.View animation="fadeInUpBig" style={styles.animationBlock}>
          <Block>
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
              Password
            </Typography>
            <TextBox
              icon="lock-closed-sharp"
              onChangeText={setPassword}
              autoCapitalize="none"
              placeholder="Your password"
              secureTextEntry={true}
            />
            <Button
              gradient
              shadow
              onPress={() => {
                handleLogin();
              }}>
              <Typography center white bold size={15}>
                LOGIN
              </Typography>
            </Button>
            <Button white shadow onPress={() => handleSignUp()}>
              <Typography center black bold size={15}>
                SIGNUP
              </Typography>
            </Button>
          </Block>
          <Block flex={false} style={styles.forgotBlock}>
            <Typography
              center
              primary
              bold
              size={12}
              onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}>
              Forgot Password?
            </Typography>
          </Block>
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
    flex: 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
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
  forgotBlock: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

/**
 * <View style={styles.container}>
      <Text>SignInScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
    </View>
 */
