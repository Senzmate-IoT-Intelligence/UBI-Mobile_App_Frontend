import {useNavigation} from '@react-navigation/native';
import React, { Component,useState, } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { GOOGLE_MAPS_APIKEY } from '../constant/GoogleKey';
//Screens are beloow
import AddressPickup from "../components/Google/AddressPickup";
import CustomButton from "../components/Google/CustomButton";
// import { setGestureState } from "react-native-reanimated/lib/reanimated2/NativeMethods";
import Mapview from './MapViewScreen';

const ChoseLocation = (props) =>{

    const navigation = useNavigation()

    const [state, setState] = useState ({})
    const {pickupCords, droplocationCords } = state


    const onDone = () =>{
        props.route.params.getCordinates({
            pickupCords,
            droplocationCords
        })
        navigation.goBack()
    }
    
    

    const fetchAddressCordinates = (lat, lng) =>{
        /* console.log("latitude", lat)
        console.log("longitude", lng) */
            setState({
            ...state,  pickupCords:{
                latitude: lat,
                longitude: lng
            }
        })
    }

    const fetchDestinationCordinates = (lat, lng) =>{
        setState({
            ...state,  droplocationCords:{
                latitude: lat,
                longitude: lng, 
            }
        })
    }


    console.log("props==>>>", props)
    // console.log("Pickup cords===>>>", pickupCords)
    // console.log("destination cords===>>>", droplocationCords)

   

    return(
        <View style={styles.containerCH}>
            {/* <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{backgroundColor: 'white', flex: 1, padding: 24}}
            > */}
                <AddressPickup
                placeholderText="Enter Starting Destination"
                fetchAddress={fetchAddressCordinates}
                />
                <View style={{marginBottom: 20}}/>

                <AddressPickup
                placeholderText="Enter END Destination"
                fetchAddress={fetchDestinationCordinates}
                />


                <CustomButton
                buttonText="Submit"
                buttonStyle={{marginTop: 30}}
                onPress={onDone}
                />
            {/* </ScrollView> */}
        </View>

    );
};
export default ChoseLocation;
const styles = StyleSheet.create({

    containerCH: {
        flex: 1,
        alignContent:"space-around"

    },
});