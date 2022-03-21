import { StyleSheet } from 'react-native';
import theme from '../../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 43,
    paddingBottom: 59
  },
  containerTitleCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 12
  },
  titleCategory: {
    flex: 1,
    color: theme.TEXT_GREEN,
    fontSize: 22,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  moreContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreOptions: {
    textTransform: 'uppercase',
    fontSize: 17,
    color: theme.TEXT_BLACK,
    marginRight: 5
  },
  postItem: {
    marginLeft: 15,
    marginRight: 23,
    marginTop: 28,
    width: 235,
    borderRadius: 12,
    overflow: 'hidden',
    borderColor: theme.SHADOW_COLOR,
    borderWidth: 1,
  },
  postImage: {
    width: 235,
    height: 103
  },
  postContent: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 9,
    paddingBottom: 35
  },
  postTitle: {
    flex: 1,
    color: theme.TEXT_GREEN,
    fontSize: 17,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  p: {
    color: theme.TEXT_GRAY_RESUME,
    fontSize: 15,
    fontFamily: 'Roboto',
    letterSpacing: 0,
    margin: 0,
    marginTop: 16
  },
  plusInfo: {
    color: theme.TEXT_ORANGE,
    fontSize: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: 'bold',
    marginTop: 15
  }
});


export default Style;