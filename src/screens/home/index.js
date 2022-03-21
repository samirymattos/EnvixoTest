import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import CategoriesList from '../../components/lists/categories-list';
import { get } from '../../services/api';

import Header from '../../components/header';
import Style from './style';
import Footer from '../../components/footer';

export default function HomeScreen(props) {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    (async () => {
      const resp = await get('categorias', 'categories');
      if (resp) setCategories(resp);
    })();
  }, []);

  return(
    <View style={Style.container}>
      <Header />
      <CategoriesList 
        {...props}
        data={categories}
      />
      <Footer />
    </View>
  );
}