import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/components/Home/Home';
import FormLogin from './src/components/Form/FormLogin/FormLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainContextProvider from './src/components/MainContext';
import FormRegister from './src/components/Form/FormRegister/FormRegister';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Register" component={FormLogin} />
          <Drawer.Screen name="Login" component={FormRegister} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MainContextProvider>

  );
}

export default App;
