import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './main';

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}