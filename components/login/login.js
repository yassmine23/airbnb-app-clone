import * as React from "react";
import {signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { db, auth} from "../configuration";

const Login = () => {
  const [mail,setMail]=React.useState("")
  const [pass,setPass]=React.useState("")


  return (
    <View style={styles.container}>  
     
    <TextInput
      style={styles.inputStyle}
      placeholder="Email"
    />
    <TextInput
      style={styles.inputStyle}
      placeholder="Password"
      maxLength={15}
      secureTextEntry={true}
    />   
    <Button
      color="#f52e57"
      title="Log in"
    />
                            
  </View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
display: "flex",
flexDirection: "column",
justifyContent: "center",
padding: 35,
backgroundColor: '#fff'
},
inputStyle: {
width: '100%',
marginBottom: 15,
paddingBottom: 15,
alignSelf: "center",
borderColor: "#ccc",
borderBottomWidth: 1
},
loginText: {
color: '#3740FE',
marginTop: 25,
textAlign: 'center'
},
preloader: {
left: 0,
right: 0,
top: 0,
bottom: 0,
position: 'absolute',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#fff'
}
});

export default Login;
