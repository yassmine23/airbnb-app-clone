import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import DetCard from "./components/DetCard";
import Wishlist from "./pages/Wishlist";
import Trips from "./pages/Trips";
import HomePage from "./pages/HomePage";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import  { db,auth, app } from "./components/firebaseConfig";
import { useEffect, useState } from "react";
const Stack = createNativeStackNavigator();
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./node_modules/react-native-actions-sheet/dist/src/styles";
import Inbox from "./pages/Inbox";
import Login from './components/login/login';

import "firebase/auth";
import Signup from './components/signup/signup';
import { Provider } from "react-native-paper";
import { onAuthStateChanged ,getAuth} from "firebase/auth";
import LoginScreen from "./components/signup/signupuser";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLogged] = useState(false)

  const auth = getAuth(app);

  useEffect(() => {

    async function checkUser() {

      onAuthStateChanged(auth,(user) => {
        if(user != null) {
          setIsLogged(true);
          console.log(auth.currentUser.email)
        } else {
          setIsLogged(false);
          console.log("auth.currentUser.email")

        }
      })
    }

    checkUser();

  }, []);
 



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
  const Main = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "inbox") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "wishlist") {
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
                color="#E61E4D"
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
              <MaterialCommunityIcons
                name="message-outline"
                color="#E61E4D"
                size={35}
              />
            ),
          }}
        />
 {isLoggedIn?
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            title: "",
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color="#E61E4D"
                size={35}
              />
            ),
          }}
        />: 
        <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "",
          tabBarLabel: "Login",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color="#E61E4D"
              size={35}
            />
          ),
        }}
      />
      }
      </Tab.Navigator>
    );
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen name="map" component={Map} options={{ title: "" }} />
          <Stack.Screen
            name="details"
            component={DetCard}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="main"
            component={Main}
            options={{ title: "main" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}