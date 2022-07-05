import {useNavigation} from '@react-navigation/native';
import React, { Component,useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { GOOGLE_MAPS_APIKEY } from '../constant/GoogleKey';
//Screens are beloow
import AddressPickup from "../components/Google/AddressPickup";
import CustomButton from "../components/Google/CustomButton";
// import { setGestureState } from "react-native-reanimated/lib/reanimated2/NativeMethods";
import Mapview from './MapViewScreen';
import { showError, showSucess } from '../components/Google/HelperFunction';

const ChoseLocation = (props) =>{

    const navigation = useNavigation()

    const [state, setState] = useState ({
        droplocationCords: {}
    })

    const { droplocationCords } = state

    const checkVaild = () =>{

        if (Object.keys(droplocationCords).length ===0) {
            showError('Please enter your Destination')
            return false
        }
        return true
    }

    const onDone = () =>{
        const isValid = checkVaild()
        console.log("Is valid", isValid)

        if (isValid) {
            props.route.params.getCordinates({
            droplocationCords
            })
            showSucess("cordination enterd successful")
            navigation.goBack() 
            
        }

    }
    
    

   /*  const fetchAddressCordinates = (lat, lng) =>{
         console.log("latitude", lat)
        console.log("longitude", lng) 
            setState({
            ...state,  pickupCords:{
                latitude: lat,
                longitude: lng
            }
        })
    }
 */
    const fetchDestinationCordinates = (lat, lng, cityText) =>{
        setState({
            ...state,  droplocationCords:{
                latitude: lat,
                longitude: lng, 
                Destination: cityText
            }
        })
    }


    console.log("props==>>>", props)
    // console.log("Pickup cords===>>>", pickupCords)
    // console.log("destination cords===>>>", droplocationCords)

   

    return(
        <View  style={styles.containerCH} >
           <View
            style={{backgroundColor: '#08d4c4', flex: 1, padding:24}}> 
             
                <View style={{flex:1}}/>
                <AddressPickup
                
                placeholderText="Enter Destination"
                fetchAddress={fetchDestinationCordinates}
                />


                <CustomButton
                buttonText="Submit"
                buttonStyle={{backgroundColor: 'white', marginBottom:10}}
                onPress={onDone}
                />
                {/* <CustomButton
                buttonText="Cancel Trip"
                buttonStyle={{backgroundColor: 'white', marginBottom:10}}
                onPress={onDone}
                /> */}
            </View>
        </View>

    );
};
export default ChoseLocation;
const styles = StyleSheet.create({

    containerCH: {
        flex: 1
        

    }
});