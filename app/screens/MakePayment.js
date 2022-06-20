import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';
import CheckBox from '@react-native-community/checkbox';

const MakePayment = () => {
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
            <TextBox placeholder="Amount (LKR)" />

            <TextBox placeholder="Name Of Cardholder" />
            <TextBox placeholder="Card Number" />
            <TextBox placeholder="Expiryr" />
            <TextBox placeholder="CVC" />

            <Block flex={1} center row >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />

            <Typography size={15}>Save my card details for faster payements</Typography>
            </Block>

            <Block flex={1} center row >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />

            <Typography size={15}>I agree with Terms & Conditions </Typography>
            </Block>

            <Block flex={1} center row >
              </Block>

            <Block flex={1} center row style={styles.buttonsBlock}>
           
              <Button gradient shadow style={styles.button}>
                <Typography center white bold>
                  Continue
                </Typography>
              </Button>
            </Block>
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default MakePayment;

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
    flex: 0.75,
    marginLeft:50,
  },
});
