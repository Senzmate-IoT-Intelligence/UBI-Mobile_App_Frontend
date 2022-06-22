import {StyleSheet, StatusBar, ScrollView,ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';

import {  } from 'react-native';

const PolicyDetails = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPayment = async () => {
     try {
      const response = await fetch('http://192.168.56.1:8001/api/user/payment');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPayment();
  }, []);


  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0.2} center middle>
          <Typography size={35} white bold transform="uppercase">
            Payment History
          </Typography>
        </Block>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Block
              flex={0.2}
              center
              row
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Typography size={15} block bold>
                Date and Time
              </Typography>
              <Typography size={15} block bold>
                Date and Time
              </Typography>
              <Typography size={15} block bold>
                Status
              </Typography>
            </Block>

            <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Block
            flex={0.2}
            center
            row
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography size={15} block bold>
             {item.dateAndTime}
            </Typography>
            <Typography size={15} block bold>
            {item.Amount}
            </Typography>
            <Typography size={15} block bold>
            {item.status}
            </Typography>
          </Block>
          )}
        />
      )}
    </View>
          {/* </ScrollView> */}
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default PolicyDetails;

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
  label: {},

  block: {
    paddingLeft: 50,
  },
  button: {
    flex: 0.75,
    marginLeft: 50,
  },
});
