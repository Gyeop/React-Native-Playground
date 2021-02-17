import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import codePush, {UpdateDialog} from 'react-native-code-push';

import {colors} from './utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ON_APP_START, ON_APP_RESUME, MANUAL이 있으며 필요에 따라 설정해주면 된다.
const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const updateDialog: UpdateDialog = {
  title: '업데이트가 필요합니다.',
  appendReleaseDescription: false,
  descriptionPrefix: '',

  // Force Update
  mandatoryContinueButtonLabel: '업데이트 하기',
  mandatoryUpdateMessage: '새로운 기능 제공을 위해 앱이 업데이트 됩니다.',

  // Update
  optionalIgnoreButtonLabel: '다음에 하기',
  optionalInstallButtonLabel: '업데이트하기',
  optionalUpdateMessage: '새로운 업데이트가 있습니다.',
};

const App = () => {
  const onButtonPress = () => {
    codePush.sync({
      updateDialog,

      // IMMEDIATE, ON_NEXT_RESTART, ON_NEXT_RESUME, ON_NEXT_SUSPEND이 있으며 필요에 따라 설정해주면 된다.
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.center}>
        <Text>코드푸시 업데이트 하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default codePush(codePushOptions)(App);
