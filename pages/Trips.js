import React from 'react'
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function Trips() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Trips
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 28,
         fontWeight: "bold", 
         paddingBottom:15,
         
    },

    container:{padding:20},
    Divider:{ position: "relative", left: 35, width: "80%" }
})