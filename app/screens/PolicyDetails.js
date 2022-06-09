import {View} from 'react-native';
import React from 'react';
import {colors} from '../theme';
import {Screen, Block} from '../components/index';
import Header from '../navigation/Header';
import {StyleSheet, StatusBar, TouchableOpacity, Text} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

const PolicyDetailsScreen = ({navigation}) => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header title="Policy Details" header />
      <Block flex={1} style={styles.container}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Help</Text>
        </TouchableOpacity>
      </Block>
    </Screen>
  );
};

export default PolicyDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
