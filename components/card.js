import React, { useEffect , useState} from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from "react-native";
import { IconButton } from "react-native-paper";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./configuration";

const { width } = Dimensions.get("window");
const height = width * 0.6;

const imgs = [
  "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/4119dad5-30be-4e72-844e-a7343046070c.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/b6b95b9b-5281-454d-adaa-af75044cacca.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/fbd09e63-43be-4e0c-87e5-bf0eecc16009.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/07ca45f5-6dd9-485f-928e-f6e683a1de31.jpg?im_w=720",
];

export default function MainCard({ navigation }) {

  const [newArr,setNewArr]=useState([])

  const getAllMobiles = () => {

    getDocs(collection(db, "Requests"))
      .then((docSnap) => {
        let data = [];
        docSnap.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setNewArr(data);
        console.log("document data : ", newArr);
      })
      .catch((error) => {
        console.error(error.message);
      });

  };

  useEffect(()=>{
    getAllMobiles()

  },[])
  return (
    <>
    {/* {newArr.map((e)=><Text>{ e.name}</Text>)} */}

    {newArr.map((dat,indx)=><View key={indx}>
    <View style={styles.container} >
      <TouchableHighlight onPress={() => navigation.navigate('details',{detail:dat})}>

        <ScrollView pagingEnabled horizontal style={styles.scroll}>
        <Image  source={{ uri: dat.Url }} style={styles.img} />
              <View>
                <IconButton
                  icon="cards-heart-outline"
                  size={30}
                  
                  iconColor="#fff"
                  style={{ position: "absolute", top: 10, right: 10 }}
                />
              </View>
        <Image  source={{ uri: dat.Url2 }} style={styles.img} />
              <View>
                <IconButton
                  icon="cards-heart-outline"
                  size={30}
                  
                  iconColor="#fff"
                  style={{ position: "absolute", top: 10, right: 10 }}
                />
              </View>
        <Image  source={{ uri: dat.Url3 }} style={styles.img} />
              <View>
                <IconButton
                  icon="cards-heart-outline"
                  size={30}
                  
                  iconColor="#fff"
                  style={{ position: "absolute", top: 10, right: 10 }}
                />
              </View>
        <Image  source={{ uri: dat.Url4 }} style={styles.img} />
              <View>
                <IconButton
                  icon="cards-heart-outline"
                  size={30}
                  
                  iconColor="#fff"
                  style={{ position: "absolute", top: 10, right: 10 }}
                />
              </View>
        <Image  source={{ uri: dat.Url5 }} style={styles.img} />
              <View>
                <IconButton
                  icon="cards-heart-outline"
                  size={30}
                  
                  iconColor="#fff"
                  style={{ position: "absolute", top: 10, right: 10 }}
                />
              </View>
          {/* {imgs.map((image, index) => (
            <>
              <Image key={index} source={{ uri: image }} style={styles.img} />
              <View>
                <IconButton
                  icon="cards-heart-outline"
                  size={30}
                  
                  iconColor="#fff"
                  style={{ position: "absolute", top: 10, right: 10 }}
                />
              </View>
            </>
          ))} */}
        </ScrollView>
        </TouchableHighlight>

        <View style={styles.pagination}>
          {/* {imgs.map((i, k) => (
            <Text style={styles.pagingText}>⬤</Text>
          ))} */}
        </View>
      </View>
    
    
      <View style={styles.details}>
        <Text style={{ fontWeight: "bold" }}>
          {dat.title}
          {/* Harlingen, Friesland, Netherlands */}
        </Text>
        <Text style={{ color: "gray" }}>{dat.address}</Text>
        <Text style={{ color: "gray" }}>18-23 sept</Text>
        <Text style={{ fontWeight: "bold" }}>
          {dat.price} <Text style={{ fontWeight: "normal" }}>night</Text>
        </Text>
      </View>
    
    </View>)}
      {/* <View style={styles.container} >
      <TouchableHighlight onPress={() => navigation.navigate('details')}>

        <ScrollView pagingEnabled horizontal style={styles.scroll}>
          {imgs.map((image, index) => (
            <>
              <Image key={index} source={{ uri: image }} style={styles.img} />
              <View>
                <IconButton
                  icon="cards-heart-outline"
                  size={30}
                  
                  iconColor="#fff"
                  style={{ position: "absolute", top: 10, right: 10 }}
                />
              </View>
            </>
          ))}
        </ScrollView>
        </TouchableHighlight>

        <View style={styles.pagination}>
          {imgs.map((i, k) => (
            <Text style={styles.pagingText}>⬤</Text>
          ))}
        </View>
      </View> */}
      {/* <View style={styles.details}>
        <Text style={{ fontWeight: "bold" }}>
          Harlingen, Friesland, Netherlands
        </Text>
        <Text style={{ color: "gray" }}>professional Host</Text>
        <Text style={{ color: "gray" }}>18-23 sept</Text>
        <Text style={{ fontWeight: "bold" }}>
          $250 <Text style={{ fontWeight: "normal" }}>night</Text>
        </Text>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: { width, height },
  scroll: { width, height },
  img: { width, height, resizeMode: "cover" },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: {
    fontSize: 14,
    color: "#fff",
    margin: 5,
  },
  details: {
    width,
    // height,
    padding: 20,
  },
});
