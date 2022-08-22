import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Divider } from "react-native-paper";


export default function Inbox() {
  const [currentScreen, setCurrentScreen] = useState("messages");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      <View style={{flexDirection:'row', }}>
        <TouchableOpacity onPress={()=>setCurrentScreen('messages')}>
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:20}} onPress={()=>setCurrentScreen('notifications')}>
          <Text >Notivications</Text>
        </TouchableOpacity>
      </View>
      <Divider bold style={{ position: "relative",  width: "100%", padding:1, marginTop:10}} />

      {currentScreen === "messages" && (
        <View style={{flex:1, marginTop:20}}>
          <Text style={{fontWeight:'bold', fontSize:18, paddingBottom:10}}>You have no unread messages</Text>
          <Text style={{ fontSize:16}}>When you contact a host or send a reservation request, you'll find yoour messages here.</Text>
        </View>
      )}
      {currentScreen === "notifications" && (
        <View style={{flex:1, marginTop:20}}>
          <Text style={{ fontSize:18}}>You're all caught up</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 15,
  },

  Divider: { position: "relative", left: 35, width: "80%" },
});
