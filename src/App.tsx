import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CustomText from './components/CustomText';

const styles = StyleSheet.create({
  container: {flex: 1},
  flexBox: {flex: 1, alignContent: 'center', justifyContent: 'center'},
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexBox}>
        <CustomText center fontSize={14}>
          React Native Playground
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

export default App;
