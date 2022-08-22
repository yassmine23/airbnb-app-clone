import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

export default function Wishlist() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Wishlist
        </Text>
        <View style={{flexDirection:'row',margin:10 }}>
        <Image
            source={{
              uri: "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=960",
            }}
            style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
          <Text style={{margin:25, fontWeight:'bold'}}>WOW</Text>
            

        </View>

        <View style={{flexDirection:'row',margin:10 }}>
        <Image
            source={{
              uri: "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720",
            }}
            style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
          <Text style={{margin:25, fontWeight:'bold'}}>One day</Text>
            

        </View>

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