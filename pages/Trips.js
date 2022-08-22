import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Avatar, Divider, IconButton, List, Button } from "react-native-paper";

export default function Trips() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trips</Text>

      <Divider bold style={{ position: "relative", left: 35, width: "80%" }} />

      <View style={{alignItems:'flex-start'}}>
        <Text
          style={{
            fontSize: 26,
            //  fontWeight: "bold",
            paddingVertical: 20,
          }}
        >
          No trips booked ... yet!
        </Text>
        <Text style={{ fontSize: 14, lineHeight: 20 }}>
          Time to dust off your bags and start planning your next adventure
        </Text>

        <Button
          mode="outlined"
          textColor="black"
          style={{
            marginVertical: 20,
            borderRadius: 10,
            paddingVertical: 10,
          }}
        >
          Start Searching
        </Button>
      </View>
      <Divider bold style={{ position: "relative", left: 35, width: "80%" }} />

      <Text style={{letterSpacing:0.5}} >Can't find your reservation here?  
        <Text style={{textDecorationLine:'underline', fontWeight:'bold'}}>Visit the Help Centre</Text>
      </Text>



    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 15,
  },

  container: { padding: 20 },
  Divider: { position: "relative", left: 35, width: "80%" },
});
