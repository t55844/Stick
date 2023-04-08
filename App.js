import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './src/components/Home/Home';

export default function App() {
  return (
    <View className='mt-5 '>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}


