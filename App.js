import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainContextProvider from './src/components/MainContext';
import FormUserAcount from './src/components/Form/FormUserAcount/FormUserAcount';
import ClientSection from './src/components/ClientSection/ClientSection';
import { Text, View } from 'react-native';
import LoggedInUserInfo from './src/components/Loguin/LoguedInUserInfo';
import Snackbar from './src/components/Feedback/Snackbar';

const Drawer = createDrawerNavigator();

function App() {
  return (
    < MainContextProvider >
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="User" component={FormUserAcount} />
          <Drawer.Screen name="Client" component={ClientSection} />
        </Drawer.Navigator>
        <Snackbar />
        <LoggedInUserInfo />
      </NavigationContainer>
    </MainContextProvider >

  );
}

export default App;
