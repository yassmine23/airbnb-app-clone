import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import DetCard from "./components/DetCard";

import HomePage from "./pages/HomePage";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import  { db } from "./components/firebaseConfig";
import { useEffect, useState } from "react";
const Stack = createNativeStackNavigator();
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";



export default function App() {
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
    <NavigationContainer>
          {/* {entities.map((w)=><p>{w.name}</p>)} */}


      <Stack.Navigator initialRouteName="profile">
        <Stack.Screen name="Home" component={HomePage}   options={{ title: '' }} />
        <Stack.Screen name="details" component={DetCard} options={{ title: '' }} />
        <Stack.Screen name="map" component={Map} options={{ title: '' }} />
        <Stack.Screen name="profile" component={Profile} options={{ title: '' }} />


      </Stack.Navigator>
    </NavigationContainer>
  


    // <View style={{flex:1}}>
    //   <HomePage /> 
    //   <DetCard/>
    //    <Map/> 
    // </View>
  );
}
