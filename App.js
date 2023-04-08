import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/components/Home/Home';
import FormLogin from './src/components/Form/FormLogin/FormLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="login" component={FormLogin} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;
