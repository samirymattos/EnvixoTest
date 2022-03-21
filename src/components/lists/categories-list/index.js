import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function CategoriesList(props) {
  const { data } = props;

  return(
    <FlatList
      data={data}
      keyExtractor={(item) => `${item?.id}`}
      renderItem={({item}) => (
        <View>
          <Text>{ item.name }</Text>
        </View>
      )}
    />
  );
}