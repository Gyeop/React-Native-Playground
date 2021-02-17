import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import CustomText from './components/CustomText';

const styles = StyleSheet.create({
  container: {flex: 1},
  flexBox: {flex: 1, alignContent: 'center', justifyContent: 'center'},
});

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  const handlePressButton = () => {
    RNBootSplash.show({fade: true});

    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexBox}>
        <TouchableOpacity onPress={handlePressButton}>
          <CustomText center fontSize={14}>
            {'스플래시 스크린 열기'}
          </CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
