import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { get } from '../../../services/api';
import RenderHtml from 'react-native-render-html';

import Style from './style';

export default function TextArticle(props) {  
  const { articleId } = props;

  const [article, setArticles] = useState([]);
  
  useEffect(() => {
    (async () => {
      const resp = await get('artigo', `posts/${articleId}`);
      if (resp) setArticles(resp);
    })();
  }, []);

  return(
    <View style={Style.container}>
      {/* <RenderHtml
        source={{html: article.content.rendered}}
        tagsStyles={Style}
      /> */}
    </View>
  );
}