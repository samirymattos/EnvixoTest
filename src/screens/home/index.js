import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { get } from '../../services/api';

import Header from '../../components/header';
import CategoriesList from '../../components/lists/categories-list';
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
      <View style={Style.containerOrder}>
        <Text style={Style.textOrder}>Ordernar por:</Text>
        <TouchableOpacity
          onPress={() => orderCategories()}
          style={Style.btnOrder}
        >
          <Text style={Style.textOrder}> 
            {current_order == 'asc' ? 'Z-A' : 'A-Z'}
          </Text>
          <Icon  
            name={current_order == 'asc' ? 'sort-desc' : 'sort-asc'}
            style={Style.iconOrder}
          />
        </TouchableOpacity>
      </View>
      <CategoriesList 
        {...props}
        data={categories}
      />
    </View>
  );
}