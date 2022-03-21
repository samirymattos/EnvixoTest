import React from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from '../../assets/styles/theme.style';
import Style from './style';

export default function Header(props) {
  const { backgroundColor, barStyle } = props;

  return (
    <View style={{backgroundColor: backgroundColor || 'transparent'}}>
      <StatusBar
        barStyle={barStyle || 'dark-content'}
        backgroundColor={backgroundColor || theme.WHITE}
      />
      <SafeAreaView style={Style.container}>
        <Image
          style={Style.imageHeader}
          source={require('../../assets/images/logo-2.png')}
        />
        <TouchableOpacity style={Style.buttonMenu}>
          <View style={Style.lineMenu}></View>
          <View style={Style.lineMenu}></View>
          <View style={Style.lineMenu}></View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}