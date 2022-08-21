import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import Header from "../components/header";
import TabsHeader from "../components/tabsHeader";



export default function Map() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View>
      <TabsHeader />
      </View>
      <MapView
        style={{ flex: 1, borderWidth: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />


    </View>
  );
}
