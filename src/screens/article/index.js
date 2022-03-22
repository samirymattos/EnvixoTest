import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { get } from '../../services/api';

import Style from './style';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ImageArticle from '../../components/article/image-article';
import TextArticle from '../../components/article/text-article';

export default function ArticleScreen(props) {  
  const articleId = props.route.params.articleId;

  const [article, setArticle] = useState([]);
  
  useEffect(() => {
    (async () => {
      const resp = await get('artigos', `posts/${articleId}`);
      if (resp) setArticle(resp);
    })();
  }, []);

  return(
    <View style={Style.container}>
      <Header 
        {...props}
      />
      <ScrollView 
        style={Style.topArticle}
      >
        <Text style={Style.titleArticle}>
          {article?.title?.rendered}
        </Text>
        <ImageArticle
          imageId={article?.featured_media}
        />
        <TextArticle
          article={article}
        />
        <Footer />
      </ScrollView>
    </View>
  );
}