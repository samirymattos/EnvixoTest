import { StyleSheet } from 'react-native';
import theme from '../../assets/styles/theme.style'

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  containerOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: 21,
  },
  textOrder: {
    textTransform: 'uppercase',
    fontSize: 17,
    color: theme.TEXT_BLACK
  },
  btnOrder: {
    borderColor: theme.BORDER,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 23,
    paddingVertical: 10,
    borderRadius: 10
  },
  iconOrder: {
    fontSize:17,
    marginLeft: 5,
    color: theme.TEXT_BLACK
  }
});

export default Style;