import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';

const Payment = () => {
  const navigation = useNavigation();

 

  const makePayment = () => {
   
    navigation.navigate(routes.MAKEPAYMENT);
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0.2} center middle>
          <Typography size={35} white bold transform="uppercase">
            Payment
          </Typography>
        </Block>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Typography black style={styles.label}>
              Distance in Km
            </Typography>
            <TextBox placeholder="Your username" />
            <Typography black style={styles.label}>
              Payment
            </Typography>
            <TextBox placeholder="Your email" />

            <Block flex={1} center row style={styles.buttonsBlock}>
              <Button
                gradient
                shadow
                onPress={() => makePayment()}
                style={styles.button}>
                <Typography center white bold>
                  Pay Now
                </Typography>
              </Button>
            </Block>
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default Payment;

const styles = StyleSheet.create({
  linearBg: {
    flex: 1,
  },
  mainBlock: {
    backgroundColor: colors.primary,
  },
  animationBlock: {
    flex: 0.8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  block: {
    paddingLeft: 50,
  },
  button: {
    flex: 0.47,
  },
});
