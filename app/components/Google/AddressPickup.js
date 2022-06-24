import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '../../constant/GoogleKey';


const AddressPickup = ({
    placeholderText
}) => {
    return (
      <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                }}
                query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
                }}
                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: styles.textInputStyle
                }}
            />
      </View>
    );
};
export default AddressPickup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerStyle: {
        backgroundColor: 'white'

    },

    textInputStyle: {
        height: 50,
        color: 'black',
        fontSize: 16,
        backgroundColor: '#F3F3F3'
    }

});