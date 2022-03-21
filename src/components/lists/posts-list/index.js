import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { get } from '../../../services/api';
import Icon from 'react-native-vector-icons/Entypo';

import Style from './style';
import ImagePost from '../image-post';
import ContentHTML from '../text-post';

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
      <View style={Style.containerTitleCategory}>
        <Text 
          style={Style.titleCategory}
        >
          { category.name }
        </Text>

        <TouchableOpacity style={Style.moreContainer}>
          <Text style={Style.moreOptions}>Ver mais</Text>
          <Icon 
            style={Style.iconMenu} 
            name="triangle-right"
          />
        </TouchableOpacity>
      </View>
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

              <Text 
                style={Style.postTitle} 
                numberOfLines={2}
              >
                { item.title.rendered }
              </Text>

              <ContentHTML
                contentText = {item}
              />

              <Text style={Style.plusInfo}>Leia mais</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}