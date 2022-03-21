import React from 'react';
import { FlatList } from 'react-native';

import PostsList from '../posts-list';
import Style from '../posts-list/style';

export default function CategoriesList(props) {
  const { data } = props;

  return(
    <FlatList
      data={data}
      keyExtractor={(item) => `${item?.id}`}
      renderItem={({item}) => (
        <PostsList 
          {...props}
          category={item}
        />
      )}
    />
  );
}