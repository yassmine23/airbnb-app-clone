import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import DetCard from "./components/DetCard";

import HomePage from "./pages/HomePage";
import Map from "./pages/Map";

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <HomePage /> */}
      <DetCard/>
      {/* <Map/> */}
    </View>
  );
}
