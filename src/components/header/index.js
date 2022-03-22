import React from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../assets/styles/theme.style';
import Style from './style';

export default function Header(props) {
  const { backgroundColor, barStyle, navigation, hideBackBtn } = props;

  return (
    <View style={{backgroundColor: backgroundColor || 'transparent'}}>
      <StatusBar
        barStyle={barStyle || 'dark-content'}
        backgroundColor={backgroundColor || theme.WHITE}
      />
      <SafeAreaView style={Style.container}>
        <View style={Style.containerHeader}>
          
          {!hideBackBtn && 
            <TouchableOpacity 
              style={Style.buttonFooter}
              onPress={() => navigation.goBack()}
            >
              <Icon 
                name="arrow-left"
              />
            </TouchableOpacity>
          }
          <Image
            style={Style.imageHeader}
            source={require('../../assets/images/logo-2.png')}
          />
        </View>
        <TouchableOpacity style={Style.buttonMenu}>
          <Icon 
            style={Style.iconMenu} 
            name="bars"
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}