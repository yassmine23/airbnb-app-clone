import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { IconButton, Divider, Avatar, List, Button} from "react-native-paper";


const { width } = Dimensions.get("window");
const height = width * 0.6;

const imgs = [
  "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/4119dad5-30be-4e72-844e-a7343046070c.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/b6b95b9b-5281-454d-adaa-af75044cacca.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/fbd09e63-43be-4e0c-87e5-bf0eecc16009.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/07ca45f5-6dd9-485f-928e-f6e683a1de31.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/87ff9bf9-5dfb-4d80-90cd-6cc61a08773e.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/040026c6-d88b-4228-9acc-994cc36fc618.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/f2ba0642-d51c-4d90-badb-b31ab2d36130.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/c0ad3aea-bd2b-42e0-bb62-81f7f4b2c4f6.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/a9159bd8-cc76-42f7-86c8-368b10b0bea1.jpg?im_w=720",
  
];

export default function DetCard() {
  return (
    <>
    
      <View style={styles.container}>
        {/* carousel */}
        <ScrollView pagingEnabled horizontal style={styles.scroll}>
          {imgs.map((image, index) => (<>
            <Image key={index} source={{ uri: image }} style={styles.img} />
            <View>
        <IconButton
          icon="cards-heart-outline"
          size={22}
          onPress={() => console.log("Pressed")}
          iconColor='#222' 
          style={{position:'absolute', top:30, right:20, backgroundColor:'white'}}

        />
        <IconButton
          icon="tray-arrow-up"
          size={22}
          onPress={() => console.log("Pressed")}
          iconColor='#222' 
          style={{position:'absolute', top:30, right:70, backgroundColor:'white'}}

        />

        <IconButton
          icon="arrow-left"
          size={22}
          onPress={() => console.log("Pressed")}
          iconColor='#222' 
          style={{position:'absolute', top:30, right:350, backgroundColor:'white'}}

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

      {/* first paragraph */}
      <View style={styles.details}>
        <Text style={{fontSize:25, fontWeight:'bold' }}> 
        <IconButton
          icon="translate"
          size={25}
          iconColor='#222' 
        />
         Luxury suite overlooking the Wadden Sea, Harlingen</Text>
        <View style={{display:'flex',flexDirection:'row',paddingTop:10, position:'relative', right:25,  }}>
        <IconButton
          icon="star"
          size={20}
          iconColor='#222' 
          style={{ position:'relative', bottom:12, left:10  }}
        />
            <Text>4.98 . <Text style={{textDecorationLine:'underline', fontWeight:'bold'}}>47 reviews </Text> </Text>
         <IconButton
          icon="medal"
          size={20}
          iconColor='#222' 
          style={{ position:'relative', bottom:12, left:10  }}
        />
        <Text>Superhost</Text>

        </View>
        <View style={{ position:'relative',  bottom:15 }}> 
        <Text style={{color:'gray'}} >Harlingen, Friseland, Netherlands</Text>
        </View>
        
      </View>
      <Divider bold  style={{ position:'relative', left:35 ,width:'80%', }}/>

       {/* second Paragraph */}
      <View style={styles.details}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <Text style={{fontSize:22, fontWeight:'bold' , flexBasis:300 }}>Tower hosted by Marcel & Linda </Text>

        <Avatar.Image size={55} source={require('../assets/avatar1.jpg')} />

        </View>
       
        <Text style={{ paddingTop:20, fontSize:16, paddingBottom:20}}>2 guests . 1 bedroom . 1 bed . 1 bathroom</Text>
        
      </View>
      <Divider bold  style={{ position:'relative', left:35 ,width:'80%', }}/>

     {/* third paragraph */}
      <View style={styles.details}>
      <List.Item
    title="Marcel & Linda is a Superhost"
    description="Superhosts are experienced, highly rated hosts who are commited to providing great stays for their guests"
    left={props => <List.Icon {...props} icon="medal" />}
  />

<List.Item
    title="Great location"
    description="95% of recent guests gave the location a 5-star rating"
    left={props => <List.Icon {...props} icon="map-marker-outline" />}
  />

<List.Item
    title="Free cancellation for 48 hours"
    left={props => <List.Icon {...props} icon="calendar-outline" />}
  />
      </View>
      <Divider bold  style={{ position:'relative', left:35 ,width:'80%', }}/>
      
      {/* 4th paragragh */}
      <View style={styles.details}>
      <Image  source={{ uri: 'https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' }}
       style={{width: 150, height: 70,resizeMode: 'contain'}} />
      <Text>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</Text>
      <Text style={{textDecorationLine:'underline', fontSize:16, fontWeight:'bold', paddingTop:10}}>Learn More</Text>
      </View>
      <Divider bold  style={{ position:'relative', left:35 ,width:'80%', }}/>

      {/* 5th Paragraph */}
      <View style={styles.details}>
      <List.Item 
      titleNumberOfLines={2} 
      titleStyle={{fontSize:14}}
      descriptionStyle={{fontWeight:'bold', textDecorationLine:'underline', fontSize:14}}
    title="Some info is shown in its original language."
    description="show original language" 
    left={props => <List.Icon {...props} icon="translate" />}
  />
  <Text style={{fontSize:16}}>The luxurious spacious suite is furnished with a cozy seating area, flat-screen TV, minibar, double box spring, double sink, jacuzzi, hairdryer, bathroom with spacious rain shower and toilet.
A luxury breakfast is served every morning..
</Text>
<Text style={{fontSize:16, textDecorationLine:'underline', fontWeight:'bold', paddingTop:10}}>Show more</Text>
      </View>
      <Divider bold  style={{ position:'relative', left:35 ,width:'80%', }}/>

       {/* 6th Paragraph */}
       <View style={styles.details}>
        <Text style={{fontSize:22, fontWeight:'bold', paddingBottom:10}}> Where you'll sleep</Text>
        <Image  source={{ uri: 'https://a0.muscache.com/im/pictures/b6b95b9b-5281-454d-adaa-af75044cacca.jpg?im_w=320' }}
       style={{width: 150, height: 100,resizeMode: 'contain', borderRadius:10}} />

       <Text style={{fontSize:16, paddingVertical:5,fontWeight:'bold', color:'#666' }}>Bedroom</Text>
       <Text style={{fontSize:16, color:'#666'}}>1 King bed</Text>
        
       </View>
       <Divider bold  style={{ position:'relative', left:35 ,width:'80%', }}/>

       {/* 7th Paragraph */}
       <View style={styles.details}>
       <Text style={{fontSize:22, fontWeight:'bold', paddingBottom:10}}> What this place offers</Text>

          <List.Item
    title="Beach access - Beachfront"
    left={props => <List.Icon {...props} icon="beach" />}
  />

<List.Item
    title="WiFi"
    left={props => <List.Icon {...props} icon="wifi" />}
  />
  

<List.Item
    title="Free parking on premises "
    left={props => <List.Icon {...props} icon="car" />}
  />

<List.Item
    title="Hot tub"
    left={props => <List.Icon {...props} icon="shower" />}
  />

   <List.Item
    title="TV "
    left={props => <List.Icon {...props} icon="television" />}
  /> 

<List.Item titleStyle={{textDecorationLine:' line-through'}}
    title="Carbon monoxide alarm "
    left={props => <List.Icon {...props} icon="alarm-light-off-outline" />}
  /> 

<Button  mode="outlined" textColor='black' style={{borderRadius:10}} >
    Show all 18 amenities
  </Button>
       </View>

       <Divider bold  style={{ position:'relative', left:35 ,width:'80%', }}/>

       {/* 8th Paragraph */}
       <View style={styles.details}>
       <Text style={{fontSize:22, fontWeight:'bold', paddingBottom:10}}> Where you'll be</Text>


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
    // fontSize: 14, 
    color: "#fff", 
    margin: 5 
},
  details: {
     padding: 20 },
});
