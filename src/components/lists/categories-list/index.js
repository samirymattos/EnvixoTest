import React from 'react';
import { FlatList } from 'react-native';

import PostsList from '../posts-list';
import Footer from '../../footer';

export default function CategoriesList(props) {
  const { data } = props;

  return(
    <FlatList
      data={data}
      keyExtractor={(item) => `${item?.id}`}
      ListFooterComponent={Footer}
      renderItem={({item}) => (
        <PostsList 
          {...props}
          category={item}
        />
      )}
    />
  );
}