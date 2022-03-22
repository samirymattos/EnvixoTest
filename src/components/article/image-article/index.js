import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { get } from '../../../services/api';

import Style from './style';

export default function ImageArticle(props) {
  const { imageId } = props;

  const [imagePost, setImagePost] = useState([]);

  useEffect(() => {
    (async () => {
      if (imageId) {
        const resp = await get('img', `media/${imageId}`);
        if (resp) setImagePost(resp.source_url);
      }
    })();
  }, [imageId]);

  return(
    <View >
      <Image 
        style={Style.postImage}
        source={{uri: `${imagePost}`}} 
      />
    </View>
  );
}