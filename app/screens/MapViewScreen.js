import React, { Component,useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, StatusBar,View,Text} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme';
import routes from '../navigation/routes';

const Mapview = ({navigation}) =>{ 
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAN_5pChGjDpjJsVz7XeJP4VKLQKSapYh4';
    const [state, setState] = useState({
        pickupCords:{
            latitude:  6.8015,
            longitude: 79.8997,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            // Need to use dynamic values
        },
        droplocationCords:{
            latitude: 6.9326,
            longitude: 79.8553,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })

    const mapRef = useRef()

    const {pickupCords, droplocationCords } = state


    return (
     <View style={styles.containerMap}>
       <MapView
       ref={mapRef}
       style={StyleSheet.absoluteFill}
    initialRegion={pickupCords}
  >
    <Marker coordinate={pickupCords}
    />
    <Marker coordinate={droplocationCords}
    />
    {/* to indicate the end point of the journey */}
     <MapViewDirections
    origin={pickupCords}
    destination={droplocationCords}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="red"
    optimizeWaypoints={true}
    onReady={result => {
        mapRef.current.fitToCoordinates;{result.coordinate,{
            edgePadding:{
                right: 30,
                bottom: 100,
                left: 30,
                top: 100
            }
        }}
    }}
  /> 
    </MapView>
     </View>
    );
   
};

const styles = StyleSheet.create({
    containerMap: {
        flex: 1,
      },
      MapCSS: {
    
      }

})
export default Mapview;