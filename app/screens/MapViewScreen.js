import React, { Component,useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {StyleSheet, StatusBar,View,Text,TouchableOpacity} from 'react-native';
import { GOOGLE_MAPS_APIKEY } from '../constant/GoogleKey';
import imagePath from '../constant/imagePath';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme';
import routes from '../navigation/routes';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const Mapview = ({navigation}) =>{ 
    

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

    /* const handleNavigation = () => {
        navigation.navigate("choselocation");
      }; */
      const onPressLocation = () =>{
        navigation.navigate("choselocation", {getCordinates: fetchvaluefromChoseLocation })
      } 

      const fetchvaluefromChoseLocation = (data) =>{
        setState({
            pickupCords: {
                ...state.pickupCords,
                latitude: data.pickupCords.latitude,
                longitude: data.pickupCords.longitude,
            },
            droplocationCords: {
                ...state.droplocationCords,
                latitude: data.droplocationCords.latitude,
                longitude: data.droplocationCords.longitude 
            }
        })
        console.log("data==>>>>", data)
      }


    return (
    <View style={{flex:1,}}>
<View style={{flex:1}}>
       <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            initialRegion={pickupCords}
            region={pickupCords}  //check is it needed in the codding
           
        >
         <Marker coordinate={pickupCords}
            image={imagePath.icCurLoc3}
        />
        <Marker coordinate={droplocationCords}
            image={imagePath.inGreen3}
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
                console.log("RESULT ",JSON.stringify(result)),
                mapRef.current.fitToCoordinates(result.coordinates,{
                    edgePadding:{
                        right: 30,
                        bottom: 100,
                        left: 30,
                        top: 100
                    }
                })
            }}
            /> 
        </MapView>
    </View>
        <View style={styles.bottomCa}>
            <TouchableOpacity 
            gradient
            shadow
            style={styles.inputstyle}
            onPress={onPressLocation}
            // onPress={()=>console.log("hid")}
            >
                <Text>Chose Destination</Text>
            </TouchableOpacity>

        </View>
     </View>
    );
   
};

const styles = StyleSheet.create({
   bottomCa: {
    backgroundColor: '#08d4c4',
    width: "100%",
    padding: 10,
   },
   inputstyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    marginTop: 15
   }
});
export default Mapview;