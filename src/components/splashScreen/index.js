import React from 'react';
import { View, Image } from 'react-native'

import Style from './style';

export default function SplashScreen(props) {
  return (
    <View style={Style.container}>
      <Image
        source={require('../../assets/images/logo.png')}
      />
    </View>
  )
}