import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';



const HomeScreen = () => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <Block flex={1} style={styles.container}>
        <LinearGradient
          colors={[colors.secondary, colors.primary]}
          style={styles.linearBg}>
        <Animatable.View animation="fadeInUp" style={styles.animationBlock1}>
          <Typography size={24} bold left>
            Chose your destination
          </Typography> 
          <Typography size={22} bold left>
            Home
          </Typography>
          <Typography size={22} bold left>
            Where to
          </Typography>
        </Animatable.View>

        <Animatable.View animation="fadeInUpBig" style={styles.animationBlock2}>
          <Typography size={24} bold left>
            Cancel your trip?
          </Typography>
           <Typography size={20} left>
            You won't be charged a cancellation fee
          </Typography> 
          <Block flex={1} center row style={styles.buttonsBlock}>
            <Button
              gradient
              shadow
              onPress={() => handleNavigation(routes.NavigationOk)}
              style={styles.button}>
              <Typography center white bold>
                No
              </Typography>
            </Button>
            <Button
              gradient
              shadow
              onPress={() => handleNavigation(routes.NavigationCa)}
              style={styles.button}>
              <Typography center white bold>
                Yes,Cancel
              </Typography>
            </Button>
          </Block>
        </Animatable.View>
        <Button
              primary
              shadow
              onPress={() =>
                handleSignUp(email, password, confirmPassword, nic, phone)
              }>
              <Typography center white bold size={15}>
                Met an Accident
              </Typography>
            </Button>
      </LinearGradient>
    </Block>
  </Screen>
    
  );
};



export default HomeScreen;

const styles = StyleSheet.create({
  linearBg: {
    flex: 1,
  },
  mainBlock: {
    backgroundColor: colors.primary,
  },
  animationBlock1: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  animationBlock2: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop:20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonsBlock1: {
    justifyContent: 'space-between',
    width: '80%'
  },
  buttonsBlock: {
    justifyContent: 'space-between',
  },
  block: {
    paddingLeft: 50,
  },
  button: {
    flex: 0.47,
  },
});
