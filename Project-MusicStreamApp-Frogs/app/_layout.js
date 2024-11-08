import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
