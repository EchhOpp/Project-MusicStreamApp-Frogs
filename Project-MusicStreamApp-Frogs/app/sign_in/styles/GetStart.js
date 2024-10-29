import { StyleSheet, Dimensions } from 'react-native';

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
  },
  context: {
    width: '80%',
  },

  colortext: {
    color: '#FFFFFF',
  },

  boldtext: {
    fontWeight: '600',
  },

  fonttext30: {
    fontSize: 34,
  },

  fonttext18: {
    fontSize: 18,
  },

  btn: {
    backgroundColor: '#DF3131',
    width: '80%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: '20%',
  }
});

export default styles;
