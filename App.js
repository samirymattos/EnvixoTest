import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/navigations';

export default function App() {
  return(
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}
