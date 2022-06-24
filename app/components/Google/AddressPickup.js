import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '../../constant/GoogleKey';


const AddressPickup = ({
    placeholderText,
    fetchAddress
}) => {

    onPressAddress = (data, details) =>{
        console.log("details===>>>", details)
        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat, lng)
    }

    return (
      <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                onPress={onPressAddress}
                fetchDetails={true}
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