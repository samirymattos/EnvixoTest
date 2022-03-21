import { StyleSheet } from 'react-native';
import theme from '../../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 43,
  },
  titleCategory: {
    color: theme.TEXT_GREEN,
    fontSize: 22,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingHorizontal: 15
  },
  postItem: {
    marginLeft: 15,
    marginRight: 23,
    marginTop: 28,
    width: 235,
    borderRadius: 12,
    overflow: 'hidden'
  },
  postImage: {
    width: 235,
    height: 103
  },
  postContent: {
    paddingTop: 15,
    paddingHorizontal: 9,
    paddingBottom: 35
  },
  postTitle: {
    color: theme.TEXT_GREEN,
    fontSize: 17,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    flex: 1,
  },
});

export default Style;