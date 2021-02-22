import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigator';

const styles = StyleSheet.create({
  container: {flex: 1},
  flexBox: {flex: 1, alignContent: 'center', justifyContent: 'center'},
});

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
