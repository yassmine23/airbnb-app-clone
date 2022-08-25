import React from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { Avatar, Divider, IconButton, List } from "react-native-paper";

import { getAuth } from 'firebase/auth';
import { app } from "../../components/firebaseConfig";
import LoginScreen from './../../components/signup/signupuser';

export function MassageProfile() {

    return ( <>
   <ScrollView>
     
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 5 }}> hello  </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Show Profile
          </Text>
        </View>
  
        <View style={{ padding: 20 }}>
          <Text>Earn money from your extra space </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
        >
            Learn more
        </Text>
        </View>

        <Divider bold style={{ position: "relative", left: 35, width: "80%" }} />

        {/* account setting */}
        <View style={styles.container}>
          <Text style={styles.title}>Settings</Text>
         <View > 
          <List.Item 
            title="Personal information"  key={1}
            left={(props) => <List.Icon {...props} icon="account-circle-outline" />}
          />
          <IconButton icon="chevron-right" size={35} iconColor="#222" 
          style={{position:'absolute', right:0, }}/>
           </View>
           <Divider bold style={styles.Divider} />
  
           <View > 
          <List.Item   key={2}
            title="Payments and payouts" 
            left={(props) => <List.Icon {...props} icon="cash-multiple" />}
          />
          <IconButton icon="chevron-right" size={35} iconColor="#222" 
          style={{position:'absolute', right:0,}}/>
           </View>
           <Divider bold style={styles.Divider} />
  
           <View > 
          <List.Item  key={3}
            title="Translation" 
            left={(props) => <List.Icon {...props} icon="translate" />}
          />
          <IconButton icon="chevron-right" size={35} iconColor="#222" 
          style={{position:'absolute', right:0,}}/>
           </View>
           <Divider bold style={styles.Divider} />
  
           <View > 
          <List.Item   key={4}
            title="Notivications" 
            left={(props) => <List.Icon {...props} icon="bell-outline" />}
          />
          <IconButton icon="chevron-right" size={35} iconColor="#222" 
          style={{position:'absolute', right:0,}}/>
           </View>
           <Divider bold style={styles.Divider} />
  
           <View > 
          <List.Item  key={5}
            title="Privacy and sharing" 
            left={(props) => <List.Icon {...props} icon="lock-outline" />}
          />
          <IconButton icon="chevron-right" size={35} iconColor="#222" 
          style={{position:'absolute', right:0,}}/>
           </View>
           <Divider bold style={styles.Divider} />
  
           <View > 
          <List.Item  key={6}
            title="Travel for work" 
            left={(props) => <List.Icon {...props} icon="bag-suitcase-outline" />}
          />
          <IconButton icon="chevron-right" size={35} iconColor="#222" 
          style={{position:'absolute', right:0,}}/>
           </View>
           <Divider bold style={styles.Divider} />
        </View>

        
        <Text
            style={{
              // fontSize: 14,
              position:'relative',
              bottom:10,
              color:'gray'
            }}
          >
            Version 22.32.1 (26002442)
          </Text>
          
  
         
      </ScrollView>
  
  
      </>
    );
  }
  
  const styles = StyleSheet.create({
      title:{
          fontSize: 26,
           fontWeight: "bold", 
           paddingBottom:15,
           
      },
  
      container:{padding:20},
      Divider:{ position: "relative", left: 35, width: "80%" }
  })