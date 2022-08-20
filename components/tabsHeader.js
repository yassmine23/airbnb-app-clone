import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Avatar  } from "react-native-paper";




const TabsHeader = () => (
    <ScrollView horizontal >
    <View  style={styles.tabs}
    >
        <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/omg.jpg')} />
            <Text>OMG</Text> 
        
      </View>

      <View style={styles.tab} >
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/nationalParks.jpg')} />
            <Text>National Parks</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/amazingpools.jpg')} />
            <Text>Amazing Pools</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/islands.jpg')} />
            <Text>Islands</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/beaches.jpg')} />
            <Text>Beaches</Text> 
        
      </View>
      
      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/tinyHomes.jpg')} />
            <Text>Tiny Homes</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/design.jpg')} />
            <Text>Designs</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/arctic.jpg')} />
            <Text>Arctic</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/sharedHomes.jpg')} />
            <Text>Shared Homes</Text> 
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/caves.jpg')} />
            <Text>Caves</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/bedandbreakfast.jpg')} />
            <Text>Bed & Breakfasts</Text> 
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/earthhomes.jpg')} />
            <Text>Earth Homes</Text> 
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/castles.jpg')} />
            <Text>Castles</Text> 
        
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/surfing.jpg')} />
            <Text>Surfing</Text> 
      </View>

      <View style={styles.tab}>
            <Avatar.Image  size={30} style={styles.avatar} source={require('../assets/countryside.jpg')} />
            <Text>Countryside</Text> 
        
      </View>

    </View>
    </ScrollView>
  
);

const styles = StyleSheet.create({
  tabs: {
    display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:15
  },
  avatar:{
    backgroundColor:'#fff',
    alignSelf:'center'

  },
  tab:{
    paddingHorizontal:8,
  }
})

export default TabsHeader;