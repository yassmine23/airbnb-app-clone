import React from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import TabsHeader from "../components/tabsHeader";

export default function HomePage() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header />
        <View>
          <TabsHeader />
        </View>

        <ScrollView style={styles.container}>
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>

        <Footer />
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
