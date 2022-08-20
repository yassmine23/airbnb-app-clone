import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { IconButton } from "react-native-paper";


const { width } = Dimensions.get("window");
const height = width * 0.6;

const imgs = [
  "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/4119dad5-30be-4e72-844e-a7343046070c.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/b6b95b9b-5281-454d-adaa-af75044cacca.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/fbd09e63-43be-4e0c-87e5-bf0eecc16009.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/07ca45f5-6dd9-485f-928e-f6e683a1de31.jpg?im_w=720",
];

export default function MainCard() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView pagingEnabled horizontal style={styles.scroll}>
          {imgs.map((image, index) => (<>
            <Image key={index} source={{ uri: image }} style={styles.img} />
            <View>
        <IconButton
          icon="cards-heart-outline"
          size={30}
          onPress={() => console.log("Pressed")}
          iconColor='#fff' 
          style={{position:'absolute', top:10, right:10, }}

        />
      </View>
      </>

          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {imgs.map((i, k) => (
            <Text style={styles.pagingText}>⬤</Text>
          ))}
        </View>
      </View>
      <View style={styles.details}>
        <Text style={{fontWeight:'bold'}}>Harlingen, Friesland, Netherlands</Text>
        <Text style={{color:'gray'}}>professional Host</Text>
        <Text style={{color:'gray'}}>18-23 sept</Text>
        <Text  style={{fontWeight:'bold'}}>$250  <Text  style={{fontWeight:'normal'}}>night</Text></Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { width, height ,},
  scroll: { width, height },
  img: { width, height, resizeMode: 'cover' ,
},
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: { 
    fontSize: 14, 
    color: "#fff", 
    margin: 5 
},
  details: {
     width, height,
     padding: 20 },
});
