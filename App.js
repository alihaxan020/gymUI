import React, {useEffect} from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from './src/navigation/TabStack';

const App = () => {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
};

export default App;
