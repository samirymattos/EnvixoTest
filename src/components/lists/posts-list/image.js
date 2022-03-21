import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { get } from '../../../services/api';

import Style from './style';

export default function ImagePost(props) {
  const { imageId } = props;

  const [imagePost, setImagePost] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await get('img', `media/${imageId}`);
      if (resp) setImagePost(resp.source_url);
    })();
  }, []);

  return(
    <View >
      <Image 
        style={Style.postImage}
        source={{uri: `${imagePost}`}} 
      />
    </View>
  );
}