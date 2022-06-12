import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {Screen, Block, Typography} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';

const NavigationScreen = () =>{
    return (
        <Screen>
          <StatusBar backgroundColor={colors.white} barStyle="light-content" />
          <Header title="Destination" header />
          <Block flex={1} style={styles.container}>
            <Typography>
              Destination
            </Typography>
          </Block>
        </Screen>
      );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});