import { StyleSheet } from 'react-native';
import theme from '../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  topArticles: {
    paddingTop: 46,
    paddingHorizontal: 28,
  },
  titleArticle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.TEXT_GREEN,
    marginBottom: 25,
    textAlign: 'center'
  }
})

export default Style;