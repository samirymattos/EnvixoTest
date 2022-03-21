import { StyleSheet, useWindowDimensions  } from 'react-native';
import theme from '../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 19,
    paddingBottom: 24,
    backgroundColor: theme.BG_GREEN,
    marginTop: 59
  },
  imageFooter: {
    height: 45,
    width: 172
  },
  textFooter: {
    color: theme.WHITE,
    maxWidth: 290,
    textAlign: 'center',
    marginTop: 11,
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'normal'
  },
  buttonFooter: {
    marginTop: 28,
    backgroundColor: theme.BG_ORANGE,
    borderRadius: 60
  },
  textButton: {
    color: theme.WHITE,
    fontSize: 12,
    paddingHorizontal: 29,
    paddingVertical: 15
  }
});

export default Style;