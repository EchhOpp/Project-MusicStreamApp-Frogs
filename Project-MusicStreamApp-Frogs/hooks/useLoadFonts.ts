import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const useLoadFonts = () => {
  const [loaded, error] = useFonts({
    'ExpoArabicBold': require('../assets/fonts/ExpoArabicBold.ttf'),
    'ExpoArabicMedium': require('../assets/fonts/ExpoArabicMedium.ttf'),
    'ExpoArabicBook': require('../assets/fonts/ExpoArabicBook.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return { loaded, error };
};

export default useLoadFonts;
