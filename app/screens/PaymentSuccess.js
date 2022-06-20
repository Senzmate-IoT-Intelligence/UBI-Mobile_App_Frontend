import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';
import ModalDropdown from 'react-native-modal-dropdown';

const PaymentSuccess = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0.2} center middle>
          <Typography size={30} white bold transform="uppercase">
            Payment Successfull
          </Typography>
          <Typography size={20} white bold></Typography>
        </Block>

        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          <Block flex={0.1} center middle>
          <Typography size={15} style={{lineHeight: 50}}></Typography>

            <Typography size={20}>Rs. 1000 </Typography>
            <Typography size={15} style={{lineHeight: 50}}></Typography>

            <Typography size={20}>
              Transection processed successfully and amount creditedd your
              account
            </Typography>
          </Block>

          <Block flex={1} center row>
            <Button gradient shadow style={styles.button}>
              <Typography center white bold>
                Ok
              </Typography>
            </Button>
          </Block>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  linearBg: {
    flex: 1,
  },
  mainBlock: {
    backgroundColor: colors.primary,
  },
  checkbox: {
    alignSelf: 'center',
  },
  dropdown: {
    marginLeft: 150,
  },
  animationBlock: {
    flex: 0.8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  buttonsBlock: {
    justifyContent: 'space-between',
  },
  block: {
    paddingLeft: 50,
  },
  button: {
    flex: 0.65,
    marginLeft: 80,
  },
});
