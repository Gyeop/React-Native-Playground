import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
  StackNavigationProp,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';
import CustomText from '../components/CustomText';
import {colors} from '../utils/colors';
import {RouteProp, StackActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';

const styles = StyleSheet.create({
  flexBox: {flex: 1, alignContent: 'center'},
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.violet,
  },
});

type Props = {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
};

const DefaultScreen: FC<Props> = (props: Props) => {
  const {navigation} = props;

  const handlePressNavigateButton = (animationName: string) =>
    navigation.dispatch(StackActions.push(animations[animationName]));

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: `#${randomColor}`}}>
      <ScrollView style={styles.flexBox}>
        {Object.keys(animations).map((animationName) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePressNavigateButton(animationName)}>
              <CustomText center fontSize={20} color={colors.white}>
                {animationName}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const forFade = (
  props: StackCardInterpolationProps,
): StackCardInterpolatedStyle => ({
  cardStyle: {
    opacity: props.current.progress,
  },
});

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={animations.default}
      screenOptions={{
        gestureEnabled: false,
        headerStyle: {elevation: 0, borderBottomWidth: 0},
      }}>
      <Stack.Screen name={animations.default} component={DefaultScreen} />

      <Stack.Screen
        name={animations.custom}
        component={DefaultScreen}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />

      <Stack.Screen
        name={animations.customFade}
        component={DefaultScreen}
        options={{cardStyleInterpolator: forFade}}
      />

      <Stack.Screen
        name={animations.forFadeFromBottomAndroid}
        component={DefaultScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name={animations.forHorizontalIOS}
        component={DefaultScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name={animations.forModalPresentationIOS}
        component={DefaultScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />

      <Stack.Screen
        name={animations.forNoAnimation}
        component={DefaultScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />

      <Stack.Screen
        name={animations.forRevealFromBottomAndroid}
        component={DefaultScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name={animations.forScaleFromCenterAndroid}
        component={DefaultScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />

      <Stack.Screen
        name={animations.forVerticalIOS}
        component={DefaultScreen}
        options={{cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}}
      />

      <Stack.Screen
        name={animations.FadeInFromBottomAndroidSpec}
        component={DefaultScreen}
        options={{
          transitionSpec: {
            open: TransitionSpecs.FadeInFromBottomAndroidSpec,
            close: TransitionSpecs.FadeInFromBottomAndroidSpec,
          },
        }}
      />

      <Stack.Screen
        name={animations.FadeOutToBottomAndroidSpec}
        component={DefaultScreen}
        options={{
          transitionSpec: {
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec,
          },
        }}
      />

      <Stack.Screen
        name={animations.RevealFromBottomAndroidSpec}
        component={DefaultScreen}
        options={{
          transitionSpec: {
            open: TransitionSpecs.RevealFromBottomAndroidSpec,
            close: TransitionSpecs.RevealFromBottomAndroidSpec,
          },
        }}
      />

      <Stack.Screen
        name={animations.ScaleFromCenterAndroidSpec}
        component={DefaultScreen}
        options={{
          transitionSpec: {
            open: TransitionSpecs.ScaleFromCenterAndroidSpec,
            close: TransitionSpecs.ScaleFromCenterAndroidSpec,
          },
        }}
      />

      <Stack.Screen
        name={animations.TransitionIOSSpec}
        component={DefaultScreen}
        options={{
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}
      />

      <Stack.Screen
        name={animations.DefaultTransition}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.DefaultTransition,
        }}
      />

      <Stack.Screen
        name={animations.ModalPresentationIOS}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />

      <Stack.Screen
        name={animations.FadeFromBottomAndroid}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name={animations.ModalSlideFromBottomIOS}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />

      <Stack.Screen
        name={animations.ModalTransition}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.ModalTransition,
        }}
      />

      <Stack.Screen
        name={animations.RevealFromBottomAndroid}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name={animations.ScaleFromCenterAndroid}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />

      <Stack.Screen
        name={animations.SlideFromRightIOS}
        component={DefaultScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;

const animations = {
  default: 'default',
  custom: 'custom',
  customFade: 'customFade',

  // CardStyleInterpolators
  forFadeFromBottomAndroid: 'forFadeFromBottomAndroid',
  forHorizontalIOS: 'forHorizontalIOS',
  forModalPresentationIOS: 'forModalPresentationIOS', // 성능이 좋지않으니 최대한 사용하지 않는 것이 좋음
  forNoAnimation: 'forNoAnimation',
  forRevealFromBottomAndroid: 'forRevealFromBottomAndroid',
  forScaleFromCenterAndroid: 'forScaleFromCenterAndroid',
  forVerticalIOS: 'forVerticalIOS',

  // OS별 애니메이션
  // 안드로이드 한정
  FadeInFromBottomAndroidSpec: 'FadeInFromBottomAndroidSpec',
  FadeOutToBottomAndroidSpec: 'FadeOutToBottomAndroidSpec',
  RevealFromBottomAndroidSpec: 'RevealFromBottomAndroidSpec',
  ScaleFromCenterAndroidSpec: 'ScaleFromCenterAndroidSpec',

  // iOS한정
  TransitionIOSSpec: 'TransitionIOSSpec',

  // 안드로이드 iOS 상관없이 사용 가능한 애니메이션
  DefaultTransition: 'DefaultTransition', //
  ModalPresentationIOS: 'ModalPresentationIOS', // 성능이 좋지않으니 최대한 사용하지 않는 것이 좋음
  FadeFromBottomAndroid: 'FadeFromBottomAndroid',
  ModalSlideFromBottomIOS: 'ModalSlideFromBottomIOS',
  ModalTransition: 'ModalTransition',

  RevealFromBottomAndroid: 'RevealFromBottomAndroid',
  ScaleFromCenterAndroid: 'ScaleFromCenterAndroid',
  SlideFromRightIOS: 'SlideFromRightIOS',
};
