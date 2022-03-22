import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './main';
import SplashScreen from '../components/splashScreen';

export default () => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(async () => {
    setLoading(false)
  }, 500)

  if(loading){
    return (
      <SplashScreen />
    )
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}