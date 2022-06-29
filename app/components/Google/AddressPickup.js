import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '../../constant/GoogleKey';


const AddressPickup = ({
    placeholderText,
    fetchAddress
}) => {

    const onPressAddress = (data, details) =>{
        console.log("details===>>>", details)

        let resLength = details.address_components

        let filtersResCity = details.address_components.filter(val =>{
            if(val.types.includes('locality')|| val.types.includes('sublocality')){
                return val
            }
            if(val.types.includes('postal_code')){
                let postalCode = val.long_name,
                zipCode = postalCode
            }
            return false
        })

        let dataTextCityObj = filtersResCity.length > 0 ? filtersResCity[0] :
        details.address_components[resLength > 1 ?resLength - 2 : resLength - 1];
        let cityText = dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17 ? dataTextCityObj.short_name : dataTextCityObj.long_name




        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat, lng, cityText)
    }

    return (
      <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                onPress={onPressAddress}
                fetchDetails={true}
                query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en'
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
        flex: 1
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