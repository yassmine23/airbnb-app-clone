import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import DetCard from "./components/DetCard";

import HomePage from "./pages/HomePage";
import Map from "./pages/Map";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage}   options={{ title: '' }} />
        <Stack.Screen name="details" component={DetCard} options={{ title: '' }} />


      </Stack.Navigator>
    </NavigationContainer>
  


    // <View style={{flex:1}}>
    //   <HomePage /> 
    //   <DetCard/>
    //    <Map/> 
    // </View>
  );
}
