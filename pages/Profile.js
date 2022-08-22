import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Avatar, Divider, IconButton, List } from "react-native-paper";
import Footer from "../components/footer";


export default function Profile() {
  return ( <>
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Avatar.Image size={62} source={require("../assets/rev2.jpg")} />
        <Text style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 5 }}>
          Yasmin
        </Text>
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
        <Text style={styles.title}>Account Settings</Text>
       <View > 
        <List.Item 
          title="Personal information" 
          left={(props) => <List.Icon {...props} icon="account-circle-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0, }}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Payments and payouts" 
          left={(props) => <List.Icon {...props} icon="cash-multiple" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Translation" 
          left={(props) => <List.Icon {...props} icon="translate" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Notivications" 
          left={(props) => <List.Icon {...props} icon="bell-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Privacy and sharing" 
          left={(props) => <List.Icon {...props} icon="lock-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Travel for work" 
          left={(props) => <List.Icon {...props} icon="bag-suitcase-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />
       </View>

       {/* Hosting */}
      <View style={styles.container}>
        <Text style={styles.title}>Hosting</Text>
       <View > 
        <List.Item 
          title="List your space" 
          left={(props) => <List.Icon {...props} icon="home-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0, }}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Learn about hosting" 
          left={(props) => <List.Icon {...props} icon="home-heart" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Host an Experience" 
          left={(props) => <List.Icon {...props} icon="diving-snorkel" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

        
       </View>

        {/* Support */}
      <View style={styles.container}>
        <Text style={styles.title}>Support</Text>
       <View > 
        <List.Item 
          title="How Airbnb works" 
          left={(props) => <List.Icon {...props} icon="vector-triangle" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0, }}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item  descriptionStyle={{paddingRight:25, lineHeight:20, paddingTop:8}}
          title="Safety Centre"
          description='Get the support, tools and information you need to be safe ' 
          left={(props) => <List.Icon {...props} icon="shield-cross-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item  descriptionStyle={{paddingRight:25, lineHeight:20, paddingTop:8}}
         descriptionNumberOfLines={3} 
          title="Contact Neighbourhood Support" 
          description='Let our team know about concerns related to home-sharing activity in your area ' 

          left={(props) => <List.Icon {...props} icon="headset" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Get Help" 
          left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0, }}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Give us feedback" 
          left={(props) => <List.Icon {...props} icon="pencil-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0, }}/>
         </View>
         <Divider bold style={styles.Divider} />

         
       </View>

        {/* Legal */}
      <View style={styles.container}>
        <Text style={styles.title}>Legal</Text>
       <View > 
        <List.Item 
          title="Terms of Services" 
          left={(props) => <List.Icon {...props} icon="note-multiple-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0, }}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Privacy Policy" 
          left={(props) => <List.Icon {...props} icon="note-multiple-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

         <View > 
        <List.Item 
          title="Privacy Settings" 
          left={(props) => <List.Icon {...props} icon="lock-outline" />}
        />
        <IconButton icon="chevron-right" size={35} iconColor="#222" 
        style={{position:'absolute', right:0,}}/>
         </View>
         <Divider bold style={styles.Divider} />

        
       </View>

        {/* Log Out */}
       <View style={styles.container}>
       <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textDecorationLine: "underline",
            position:'relative',
            bottom:20
          }}
        >
          Log out
        </Text>
        <Divider bold style={styles.Divider}/>

       </View>

       {/* version */}
       <View style={styles.container}>
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
        

       </View>
       
    </ScrollView>

    <Footer />

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