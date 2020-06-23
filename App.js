import React from 'react';
import DisplayUserLocationAndRZ from './components/DisplayUserLocationAndRZ';
import DisplayWarning from './components/DisplayWarning';
import { View } from 'react-native';
import LocationWarningContextProvider from './context/LocationWarningContext';
import LocationAndRZ from './screens/LocationAndRZ';

export default function App() {
  return(
    <LocationAndRZ/>
  )
}