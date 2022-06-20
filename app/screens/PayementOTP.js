import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';
import ModalDropdown from 'react-native-modal-dropdown';

const PaymentOTP = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0.2} center middle>
          <Typography size={35} white bold transform="uppercase">
            Make Payment
          </Typography>
          <Typography size={20} white bold>
            Select Payement Method
          </Typography>
        </Block>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex={1} center row>
          <Typography size={15}>Amount</Typography>
            <TextBox placeholder="Amount (LKR)" />
            </Block>
            <Block flex={1} center row>
            <Typography size={15}>Date</Typography>
            <TextBox placeholder="Date" />
            </Block>
            <Block flex={1} center row>
            <Typography size={15}>Card Number</Typography>
            <TextBox placeholder="Card Number" />
            </Block>

            <Typography size={15} style={{lineHeight: 50}}>
              Recive your one time password via
            </Typography>

            <Block flex={1} center row>
              <Typography size={15}>Mobile: </Typography>
              <ModalDropdown
                style={styles.dropdown}
                defaultValue="Select Mobile"
                options={['******564']}
              />
            </Block>

            <Typography size={15} style={{lineHeight: 50}}></Typography>

            <Block flex={1} center row >
              <Typography size={15} >Email : </Typography>
              <ModalDropdown
                style={styles.dropdown}
                defaultValue="Select Email"
                options={['***abc@gmail.com']}
              />
            </Block>

            <Typography size={15} style={{lineHeight: 50}}></Typography>

            <Typography size={15} >Please enter the OTP below to complete your transaction</Typography>

            <Typography size={15} style={{lineHeight: 50}}></Typography>
            
            <Block flex={1} center row>
            <Typography size={15}>One Time Password</Typography>
            <TextBox placeholder="Enter your OTP" />
            </Block>
            <Block flex={1} center row style={styles.buttonsBlock}>
              <Button gradient shadow style={styles.button}>
                <Typography center white bold>
                  Submit
                </Typography>
              </Button>

              <Button gradient shadow style={styles.button}>
                <Typography center white bold>
                  Resend OTP
                </Typography>
              </Button>
            </Block>
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default PaymentOTP;

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
    flex: 0.47,
  },
});
