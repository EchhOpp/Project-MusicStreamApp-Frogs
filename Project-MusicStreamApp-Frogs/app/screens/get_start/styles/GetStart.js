import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { Popins } from '../../../../constants/Popins'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  body: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  context: {
    width: '90%',
  },

  colortext: {
    color: '#FFFFFF',
  },

  fonttext30: {
    fontSize: Popins.Heading3.size,
    fontWeight: 'bold',
  },

  fonttext18: {
    fontSize: Popins.Heading5.size,
  },

  btn: {
    backgroundColor: '#DF3131',
    width: '90%',
    height: '5.8%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: '8%',
    marginBottom: '30%',
  }
});

export default styles;
