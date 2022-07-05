import React, {Component, useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import {GOOGLE_MAPS_APIKEY} from '../constant/GoogleKey';
import imagePath from '../constant/imagePath';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme';
import routes from '../navigation/routes';
import {
  locationPermission,
  getCurrentLocation,
} from '../components/Google/HelperFunction';
import axios from 'axios';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Mapview = ({navigation}) => {
  const mapRef = useRef();
  const markerRef = useRef();

  const [state, setState] = useState({
    CurrentLocationCords: {
      latitude: 6.795064608508844,
      longitude: 79.90029484033585
    },
    droplocationCords: {},
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 6.795064608508844,
      longitude: 79.90029484033585,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
  });

  const {
    CurrentLocationCords,
    droplocationCords,
    isLoading,
    coordinate,
    time,
    distance,
  } = state;

  useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async () => {
    const locationPermissionDenied = await locationPermission();
    if (locationPermissionDenied) {
      const {latitude, longitude} = await getCurrentLocation();
      animate(latitude, longitude);
      setState({
        ...state,
        CurrentLocationCords: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
    /* console.log("location permission", locationPermission) */
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 6000);
    return () => clearInterval(interval);
  });

  /* const handleNavigation = () => {
          navigation.navigate("choselocation");
        }; */
  const onPressLocation = () => {
    navigation.navigate('choselocation', {
      getCordinates: fetchvaluefromChoseLocation,
    });
  };

  const fetchvaluefromChoseLocation = data => {
    setState({
      ...state,
      droplocationCords: {
        // ...state.droplocationCords,
        latitude: data.droplocationCords.latitude,
        longitude: data.droplocationCords.longitude,
        Destination: data.droplocationCords.Destination,
      },
    });
    console.log('data==>>>>', data);
  };

  // useEffect(() => {
  //   if (
  //     droplocationCords.latitude &&
  //     droplocationCords.longitude
  //   ) {
  //     // debugger;
  //     // save to database
  //     console.log('test');
  //     axios.post('http://192.168.8.146:5000/api/tripdetails/create', {
  //       Tripid: 5,
  //       startingpoint: CurrentLocationCords.latitude,
  //       destination: droplocationCords.Destination,
  //       date: new Date(),
  //       distance: distance
  //     });
  //   }
  // }, [droplocationCords]);

  const createTrip = (dist) => {
    axios.post('http://192.168.43.73:5000/api/tripdetails/create', {
      startingpoint: 'Katubadda',
      destination: droplocationCords.Destination,
      date: new Date(),
      distance: dist
    });
  };

  const InformAccident = () =>{
    axios.post('',{

    })
  }

  const animate = (latitude, longitude) => {
    const newCoordinate = {latitude, longitude};
    if (Platform.OS == 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  const onCenter = () => {
    mapRef.current.animateToRegion({
      latitude: CurrentLocationCords.latitude,
      longitude: CurrentLocationCords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const fetchTime = (d, t) => {
    console.log(d, t);
    //d -distance, t -time
    setState({...state, distance: d, time: t});
  };

  return (
    <View style={{flex: 1}}>
      {distance !== 0 && time !== 0 && (
        <View style={{alignItems: 'center', marginVertical: 16}}>
          <Text>Time Left: {time}</Text>
          <Text>Distance Left: {distance}</Text>
        </View>
      )}
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={{
            ...CurrentLocationCords,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          // region={pickupCords}  //check is it needed in the codding
        >
          <Marker.Animated
            ref={markerRef}
            coordinate={coordinate}
            image={imagePath.icCurLoc2}
          />
          {Object.keys(droplocationCords).length > 0 && (
            <Marker coordinate={droplocationCords} image={imagePath.inGreen2} />
          )}
          {/* to indicate the end point of the journey */}

          {Object.keys(droplocationCords).length > 0 && (
            <MapViewDirections
              origin={CurrentLocationCords}
              destination={droplocationCords}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="red"
              optimizeWaypoints={true}
              onReady={result => {
                // console.log('RESULT ', JSON.stringify(result)),
                fetchTime(result.distance, result.duration),
                  createTrip(result.distance),
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 30,
                      bottom: 100,
                      left: 30,
                      top: 100,
                    },
                  });
              }}
              onError={errorMessage => {
                // console.log('Got an error');
              }}
            />
          )}
        </MapView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onPress={onCenter}>
          <Image source={imagePath.inGreenIndi1} />
        </TouchableOpacity>
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
        <Button
              primary
              shadow
               onPress={() =>
                handleSignUp()
              }> 
              <Typography center white bold size={15}>
                Met an Accident
              </Typography> 
            </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomCa: {
    backgroundColor: '#08d4c4',
    width: '100%',
    padding: 10,
  },
  inputstyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
  },
});
export default Mapview;
