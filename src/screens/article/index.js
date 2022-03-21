import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { get } from '../../services/api';

import Style from './style';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ImagePost from '../../components/article/image-article';
import TextArticle from '../../components/article/text-article';

export default function ArticleScreen(props) {  
  // const { articleId } = props;

  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    (async () => {
      const resp = await get('artigos', `posts/4907`);
      if (resp) setArticles(resp);
    })();
  }, []);

  return(
    <View style={Style.container}>
      <Header />
      <ScrollView style={Style.topArticles}>
        {/* <Text style={Style.titleArticle}>
          {articles.title.rendered}
        </Text>
        <ImagePost
          imageId={articles.featured_media}
        /> */}
        <TextArticle
          articleId='4907'
        ></TextArticle>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
}