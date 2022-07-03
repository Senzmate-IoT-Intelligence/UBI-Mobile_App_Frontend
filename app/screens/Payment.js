import { StyleSheet, StatusBar, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Screen, Block, Typography, Button, TextBox } from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import { colors } from '../theme';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';

const Payment = () => {
  const navigation = useNavigation();
  const [distance, setDistance] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const stripe = useStripe();

  const makePayment = async () => {
    //   try {
    //     const finalAmount = parseInt(amount);
    //     const res = await axios.post("http://192.168.1.3:8000/api/user/stripePayment", {
    //       amount: finalAmount, name: name
    //     })
    //     const clientSecret=  res.data.clientSecret;
    //      console.log(clientSecret);
    //     const initSheet = await stripe.initPaymentSheet({
    //       paymentIntentClientSecret: clientSecret,
    //       merchantDisplayName: name
    //     });
    //     if (initSheet.error) {
    //       console.log(initSheet.error);
    //       return Alert.alert(initSheet.error.message);
    //     }
    //     const presentSheet = await stripe.presentPaymentSheet({
    //  clientSecret
    //     });

    //     if (presentSheet.error) {
    //       console.log(presentSheet.error);
    //       return Alert.alert(presentSheet.error.message);
    //     }
    //     console.log("Donated successfully! Thank you for the donation.");
    //     Alert.alert("Donated successfully! Thank you for the donation.");
    //   } catch (err) {
    //     console.log(err);
    //     Alert.alert("Payment failed!");

    //   }

    try {
      const finalAmount = parseInt(amount);
      if (finalAmount < 1) return Alert.alert("You cannot donate below 1 LKR");

      axios
        .post("http://192.168.1.3:8000/api/user/stripePayment", { amount: finalAmount, name: name })
        .then(async (response) => {
          let Data = response.data
          Alert.alert(Data.message)

          const initSheet = await stripe.initPaymentSheet({
            paymentIntentClientSecret: Data.clientSecret,
            merchantDisplayName: name
          });
          if (initSheet.error) {
            console.error(initSheet.error);
            return Alert.alert(initSheet.error.message);
          }
          const presentSheet = await stripe.presentPaymentSheet({
            clientSecret: Data.clientSecret,
          });
          if (presentSheet.error) {
            console.error(presentSheet.error);
            return Alert.alert(presentSheet.error.message);
          }
          console.log("Paid");
          Alert.alert("Payment successful! Thank you for the payment.");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(error.toString())
        })
    } catch (err) {
      console.error(err);
      Alert.alert("Payment failed!");
    }

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
            <TextBox placeholder="Your Distance" onChangeText={(e) => setDistance(e)} />
            <Typography black style={styles.label}>
              Payment
            </Typography>
            <TextBox placeholder="Your Amount" onChangeText={(e) => setAmount(e)} />
            <Typography black style={styles.label}>
              Name
            </Typography>
            <TextBox placeholder="Your Name" onChangeText={(e) => setName(e)} />
            <Block flex={1} center row style={styles.buttonsBlock}>
              <Button
                gradient
                shadow
                onPress={makePayment}
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
