import { StyleSheet, useWindowDimensions  } from 'react-native';
import theme from '../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.WHITE,
    elevation: 15,
  },
  imageHeader: {
    height: 50,
  },
  buttonMenu: {
    backgroundColor: theme.BG_GREEN,
    width: 37,
    height: 37,
    borderRadius: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  iconMenu: {
    color: theme.WHITE,
    fontSize: 21
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconArrow: {
    marginRight: 10
  },
  arrowBack: {
    fontSize: 20,
    padding: 10,
    marginRight: 10,
    color: theme.TEXT_BLACK
  }
});

export default Style;