import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View>
        <IconButton
          icon="magnify"
          size={26}
          onPress={() => console.log("Pressed")}
          iconColor='gray'

        />
        <Text style={styles.span}>Explore</Text>
      </View>

      <View>
        <IconButton
          icon="cards-heart-outline"
          size={26}
          onPress={() => console.log("Pressed")}
          iconColor='gray'

        />
        <Text style={styles.span}>Wishlist</Text>
      </View>

      <View>
        <IconButton
          icon="layers-triple-outline"
          size={26}
          onPress={() => console.log("Pressed")}
          iconColor='gray'

        />

        <Text style={styles.span}>Trips</Text>
      </View>

      <View>
        <IconButton
          icon="message-reply-outline"
          size={26}
          onPress={() => console.log("Pressed")}
          iconColor='gray'

        />
        <Text style={styles.span}>Inbox</Text>
      </View>

      <View>
        <IconButton
          icon="account-circle-outline"
          size={26}
          onPress={() => console.log("Pressed")}
          iconColor='gray'

        />
        <Text style={styles.span}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  span:{
    paddingBottom:10,
    textAlign:'center',
    color:'gray'
  }
});
