import { StyleSheet } from 'react-native';
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.gray,
    position: 'relative',
  },
  header: {
    marginHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  btndown: {
    backgroundColor: 'rgba(255, 255, 256, 0.3)',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'rgba(255, 255, 256, 0.3)',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  body: {
    position: 'absolute',
    bottom: '18%',
    left: 0,
    right: 0,
    zIndex: 100,
    marginHorizontal: 20,
  },
  bodycontent1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lyrics: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  color: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: 'bold',
    width: 250,
  },
  controllicon: {
    gap: 10,
  },
  icon: {
    backgroundColor: 'rgba(255, 255, 256, 0.3)',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  color2: {
    color: 'rgba(255, 255, 256, 0.5)',
  },
  bodycontent2: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  imagecontainer: {
    flexDirection: 'row',
    gap: 10,
  },
  info: {
    gap: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 120,
  },
  subtitle: {
    fontSize: 12,
    width: 120,
  },
  follow: {
    backgroundColor: 'rgba(255, 255, 256, 0.3)',
    padding: 10,
    borderRadius: 50,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followtext: {
    fontSize: 12,
    color: Colors.neutral.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
