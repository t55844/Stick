import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/components/Home/Home';
import FormLogin from './src/components/Form/FormLogin/FormLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainContextProvider from './src/components/MainContext';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="login" component={FormLogin} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MainContextProvider>

  );
}

export default App;
