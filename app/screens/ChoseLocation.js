import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { GOOGLE_MAPS_APIKEY } from '../constant/GoogleKey';
import AddressPickup from "../components/Google/AddressPickup";
import { ScrollView } from "react-native-gesture-handler";

const ChoseLocation = ({navigation}) =>{
    return(
        <View style={styles.containerCH}>
            <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{backgroundColor: 'white', flex: 1, padding: 24}}
            >
                <AddressPickup
                placeholderText="Enter Starting Destination"
                />
                <View style={{marginBottom: 20}}/>

                <AddressPickup
                placeholderText="Enter END Destination"/>
            </ScrollView>
        </View>

    );
};
export default ChoseLocation;
const styles = StyleSheet.create({

    containerCH: {
        flex: 1,

    },
});