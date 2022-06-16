import {StyleSheet, ScrollView, StatusBar, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme/index';

const paymentScreen = () => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0} center middle>
          <Typography bold white size={35}>
            Make Payment
          </Typography>
        </Block>

        <Block flex={0.3} center middle>
          <Typography bold white size={20}>
            Select Payment Method
          </Typography>
        </Block>

        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Typography black style={styles.label}>
              Amount (LKR)
            </Typography>
            <TextBox autoCapitalize="none" />

            <Typography black style={styles.label}>
              Name of Cardholder
            </Typography>
            <TextBox icon="mail" autoCapitalize="none" />

            <Typography black style={styles.label}>
              Card Number
            </Typography>
            <TextBox autoCapitalize="none" />

            <Typography black style={styles.label}>
              Expiry
            </Typography>
            <TextBox autoCapitalize="none" />

            <Typography black style={styles.label}>
              CVC
            </Typography>
            <TextBox icon="mail" autoCapitalize="none" />

            <Button primary shadow>
              <Typography center white bold size={15}>
                Continue
              </Typography>
            </Button>
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default paymentScreen;

const styles = StyleSheet.create({
  linearBg: {
    flex: 1,
  },
  animationBlock: {
    flex: 0.7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  label: {
    paddingLeft: 5,
    marginBottom: 0,
    fontSize: 13,
  },
});
