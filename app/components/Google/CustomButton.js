import React, {Component} from 'react';
import {  Text,StyleSheet,TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../Button';


const CustomButton = ({
    onPress = () => {},
    buttonStyle = {},
    buttonText
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{...styles.buttonStyle, ...buttonStyle}}
    >
        <Text>{buttonText}</Text>

    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
    buttonStyle: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        borderWidth: 1

    }
});
