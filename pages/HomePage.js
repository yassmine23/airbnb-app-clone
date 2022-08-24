import React from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import Header from "../components/header";
import Card from "../components/card";
import TabsHeader from "../components/tabsHeader";
import { Button } from "react-native-paper";

export default function HomePage({ navigation }) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header />
        <View>
          <TabsHeader />
        </View>

        <ScrollView style={styles.container}>
          <Card navigation={navigation} />
<<<<<<< HEAD
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
=======
         
>>>>>>> AhmedMaged
        </ScrollView>
        <Button
          icon="map"
          mode="contained"
          onPress={() => navigation.navigate("map")}
          style={{
            width: 100,
            backgroundColor: "#333",
            paddingVertical: 4,
            position: "absolute",
            bottom: 100,
            left: "38%",
          }}
        >
          Map
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    flex: 1,
  },
  container: {
    flex: 1,
    height: 200,
    //    alignItems:'center'
  },
  footer: {
    // position:'absolute',
    // bottom:0,
    flex: 1,
  },
});
