import React from 'react';
import { View, Image, TouchableOpacity, Linking, Text } from 'react-native';

import Style from './style';

export default function Footer() {
  return (
    <View style={Style.container}>
      <Image
        style={Style.imageFooter}
        source={require('../../assets/images/logo-coursify-w.png')}
      />
      <Text style={Style.textFooter}>
        O Coursify.me é uma plataforma de ensino a distância, onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
      </Text>
      <TouchableOpacity 
        style={Style.buttonFooter}
        onPress={() => Linking.openURL('https://coursify.me')}
      >
        <Text style={Style.textButton}>Quero conhecer a plataforma!</Text>
      </TouchableOpacity>
    </View>
  )
}