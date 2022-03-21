import { StyleSheet, useWindowDimensions  } from 'react-native';
import theme from '../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.WHITE
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
  lineMenu: {
    backgroundColor: theme.WHITE,
    height: 4,
    width: 21,
    marginVertical: 1,
    borderRadius: 2
  }
});

export default Style;