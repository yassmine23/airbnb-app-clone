import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import DetCard from "./components/DetCard";

import HomePage from "./pages/HomePage";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Trips from "./pages/Trips";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "./pages/Inbox";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './node_modules/react-native-actions-sheet/dist/src/styles';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <NavigationContainer>

       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage}   options={{ title: '' }} />
         <Stack.Screen name="details" component={DetCard} options={{ title: '' }} />
         <Stack.Screen name="map" component={Map} options={{ title: '' }} />
         <Stack.Screen name="profile" component={Profile} options={{ title: '' }} />
         <Stack.Screen name="inbox" component={Inbox} options={{ title: '' }} />

       </Stack.Navigator>
     </NavigationContainer> */}

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";

              } else if (route.name === "profile") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }
             else if (route.name === "inbox") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
           else if (route.name === "wishlist") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
              

            },
            tabBarActiveTintColor: "#E61E4D",
            tabBarInactiveTintColor: "gray",
            
          
          })}
        >
          <Tab.Screen
            name="Explore"
            component={HomePage}
            options={{
              title: "",
              tabBarLabel: "Explore",

              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="magnify"
                  color="#E61E4D"
                  size={35}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Wishlist"
            component={Wishlist}
            options={{
              title: "",
              tabBarLabel: "Wishlist",

              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="heart-outline"
                  color="#E61E4D"
                  size={35}
                />
              ),
            }}
          />

          <Tab.Screen
            name="trips"
            component={Trips}
            options={{
              title: "",
              tabBarLabel: "Trips",

              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="layers-triple-outline"
                  color= "#E61E4D"
                  size={35}
                />
              ),
            }}
          />

          <Tab.Screen
            name="inbox"
            component={Inbox}
            options={{
              title: "",
              tabBarLabel: "Inbox",

              tabBarIcon: () => (
                <MaterialCommunityIcons name="message-outline" color="#E61E4D" size={35} />
              ),
            }}
          />

          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              title: "",
              tabBarLabel: "Profile",
              

              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  color="#E61E4D"
                  size={35}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
