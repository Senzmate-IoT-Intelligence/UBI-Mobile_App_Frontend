import {StyleSheet, StatusBar, ScrollView,ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';

const PolicyDetails = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 

  const paymentOTP = () => {
    navigation.navigate(routes.PAYMENTOTP);
  };

  const getMovies = async () => {
    try {
     const response = await fetch('http://192.168.56.1:8001/api/user/trip');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   getMovies();
 }, []);

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Block flex={0.2} center middle>
          <Typography size={35} white bold transform="uppercase">
           Trip History
          </Typography>
        </Block>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          {/* <ScrollView showsVerticalScrollIndicator={false}>
           */}
          <Block flex={0.2} center row style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography size={15} block bold>
            Date
          </Typography>
          <Typography size={15} block bold> 
            To
          </Typography>
          <Typography size={15} block bold>
            Total Distance
          </Typography>
            </Block>

            {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Block
            flex={0.2} center row
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography size={15} block bold>
             {item.date}
            </Typography>
            <Typography size={15} block bold>
            {item.To}
            </Typography>
            <Typography size={15} block bold>
            {item.totalDistance}
            </Typography>
          </Block>
          )}
        />
      )}
            

            
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

  block: {
    paddingLeft: 50,
  },
  button: {
    flex: 0.75,
    marginLeft: 50,
  },
});
