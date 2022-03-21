import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { get } from '../../../services/api';

import Style from './style';
import ImagePost from './image';

export default function PostsList(props) {
  const { category, navigation } = props;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await get('posts', `posts?categories=${category.id}`);
      if (resp) setPosts(resp);
    })();
  }, []);

  return(
    <View style={Style.container}>
      <Text 
        style={Style.titleCategory}
        ellipsizeMode='tail'
        numberOfLines={2}
      >
        { category.name }
      </Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => `${item?.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Article', {article: item})}
            style={Style.postItem}
          >
            <ImagePost
              imageId={item.featured_media}
            />
            <View style={Style.postContent}>
              <Text style={Style.postTitle}>{ item.title.rendered }</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}