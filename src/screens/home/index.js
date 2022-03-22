import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CategoriesList from '../../components/lists/categories-list';
import { get } from '../../services/api';

import Header from '../../components/header';
import Style from './style';

export default function HomeScreen(props) {
  const [categories, setCategories] = useState([]);
  const [current_order, setCurrentOrder] = useState('asc');
  
  useEffect(() => {
    (async () => {
      const resp = await get('categorias', 'categories');
      if (resp) setCategories(resp);
    })();
  }, []);

  const orderCategories = () => {
    const order = categories.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      if (current_order == 'asc') {
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      } else {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }
    });
    setCurrentOrder(current_order == 'asc' ? 'desc' : 'asc');
    setCategories(order)
  }

  return(
    <View style={Style.container}>
      <Header 
        {...props}
        hideBackBtn
      />
      <TouchableOpacity
        onPress={() => orderCategories()}
      ><Text>aaaaaaaaaaaaaa</Text></TouchableOpacity>
      <CategoriesList 
        {...props}
        data={categories}
      />
    </View>
  );
}