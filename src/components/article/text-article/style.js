import { StyleSheet } from 'react-native';
import theme from '../../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginTop: 31,
    paddingHorizontal: 28,
  },
  p: {
    margin: 0,
    marginBottom: 27,
    color: theme.TEXT_GRAY,
    fontSize: 17,
    fontFamily: 'Roboto',
    letterSpacing: 0
  },
});


export default Style;