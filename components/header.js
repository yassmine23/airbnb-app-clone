import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar, IconButton } from "react-native-paper";

export default function Header() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.searchBar}>
      <IconButton
        icon="magnify"
        size={25}
        onPress={() => console.log("Pressed")}
      />
      <View>
        <Text>Where to?</Text>
        <Text style={styles.span}>AnyWhere . Any week . Add guests</Text>
      </View>

      <IconButton
        icon="tune-variant"
        size={25}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin:30,
    marginBottom:0,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 50,
    // paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  span: {
    color: "gray",
    marginTop: 3,
  },
});
