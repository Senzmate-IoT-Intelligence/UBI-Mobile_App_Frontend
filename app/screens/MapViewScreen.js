import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, StatusBar,View,Text} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme';
import routes from '../navigation/routes';

const Mapview = ({navigation}) =>{ 
    return (
        <View>
         <Text>Hello World</Text>
    </View>
    );
   

};

const styles = StyleSheet.create({

})
export default Mapview;