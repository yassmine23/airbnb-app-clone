import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

import Inbox from '../pages/Inbox';
import Profile from "../pages/Profile";
import HomePage from "../pages/HomePage";


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();


export default function Footer() {
  return (<></>
    // <View style={styles.footer}>
    //   <View>
    //     <IconButton
    //       icon="magnify"
    //       size={26}
    //       onPress={() => console.log("Pressed")}
    //       iconColor='gray'
    //       style={{marginBottom:0}}


    //     />
    //     <Text style={styles.span}>Explore</Text>
    //   </View>

    //   <View>
    //     <IconButton
    //       icon="cards-heart-outline"
    //       size={26}
    //       onPress={() => console.log("Pressed")}
    //       iconColor='gray'
    //       style={{marginBottom:0}}


    //     />
    //     <Text style={styles.span}>Wishlist</Text>
    //   </View>

    //   <View>
    //     <IconButton
    //       icon="layers-triple-outline"
    //       size={26}
    //       onPress={() => console.log("Pressed")}
    //       iconColor='gray'
    //       style={{marginBottom:0}}

    //     />

    //     <Text style={styles.span}>Trips</Text>
    //   </View>

    //   <View>
    //     <IconButton
    //       icon="message-reply-outline"
    //       size={26}
    //       onPress={() => console.log("Pressed")}
    //       iconColor='gray'
    //       style={{marginBottom:0}}


    //     />
    //     <Text style={styles.span}>Inbox</Text>
    //   </View>

    //   <View>
    //     <IconButton
    //       icon="account-circle-outline"
    //       size={26}
    //       onPress={() => console.log("Pressed")}
    //       iconColor='gray'
    //       style={{marginBottom:0}}


    //     />
    //     <Text style={styles.span}>Profile</Text>
    //   </View>
    // </View>

    // <NavigationContainer>
      // <Tab.Navigator>
      //   <Tab.Screen name="Home" component={HomePage} />
      //   <Tab.Screen name="profile" component={Profile} />
      //   <Tab.Screen name="inbox" component={Inbox} />

      // </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor:'lightgray',
     borderStyle:'solid',
      borderTopWidth:1.5,
  },

  span:{
    // paddingBottom:10,
    textAlign:'center',
    color:'gray',
    position:'relative', bottom:6
  }
});
