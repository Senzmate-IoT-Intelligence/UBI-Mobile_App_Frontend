const paymentScreen = ({navigation}) => {
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

export default paymentScreen;
