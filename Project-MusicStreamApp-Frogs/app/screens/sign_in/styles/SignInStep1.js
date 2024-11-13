import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: Colors.neutral.black,
  },

  header: {
    width: width,
    alignItems: 'flex-start',
    height: 0.15 * height,
    paddingHorizontal: 24,
  },
  steps: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  step: {
    width: '49%',
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
  },
  txtHeader: {
    color: Colors.neutral.white,
    width: '80%',
    fontWeight: 'bold',
  },
  choose1: {
    width: width,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  
  choose: {
    width: width,
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  txtInput: {
    width: '100%',
    height: 54,
    borderRadius: 48,
    backgroundColor: '#1e1e1e',
    paddingLeft: 20,
    color: Colors.neutral.white,
    marginBottom: 20,
  },
  litsItem: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#1e1e1e',
    marginRight: 12,
    borderRadius: 50,
  },
  itemN: {
    color: Colors.neutral.white,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },


  // Artists
  Artists: {
    fontWeight: 'bold',
    color: Colors.neutral.white,
  },

  itemAva: {
    width: '30%',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },

  avaImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  colortext2: {
    color: Colors.neutral.white,
  },
  colortext: {
    color: Colors.neutral.white,
  },
  boldtext: {
    fontWeight: '500',
  },
  fonttext16: {
    fontSize: 16,
  },
  fonttext14: {
    fontSize: 14,
  },
  fonttext24: {
    fontSize: 24,
  },
  fonttext12: {
    fontSize: 12,
  },
  btn: {
    marginTop: 50,
    backgroundColor: '#df3132',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 50,
    alignSelf: 'center',
  },
});

export default styles;