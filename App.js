import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/bottomNavigation';

const App = () => {
  useEffect(async () => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
