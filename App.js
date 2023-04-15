import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainContextProvider from './src/components/MainContext';
import FormUserAcount from './src/components/Form/FormUserAcount/FormUserAcount';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login/Register" component={FormUserAcount} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MainContextProvider>

  );
}

export default App;
