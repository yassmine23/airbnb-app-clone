import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
const Signup = () => {
  const [user, AddUsers] = React.useState({
    userEmail: "",
    userPassword: "",
    userAge: "",
    userName: "",
    userfav: [],
    path: "",
    reser: [],
  });

  const [errr, setError] = React.useState({
    errorEmail: null,
    errorPassword: null,
    errorName: null,
    errorAge: null,
  });

  const requestCollection = collection(db, "users")

   const createRequest = async (e) => {
    e.preventDefault();
    const x = {
      name: user.userName,
      email: user.userEmail,
      password: user.userPassword,
      age: user.userAge,
    };
    const y = {
      name: user.userName,
      email: user.userEmail,
      password: user.userPassword,
      age: user.userAge,
      path: "imgName",
      favorit: [],
      reservsion: [],
    };

      await addDoc(requestCollection, y);
    
  };
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Log in</Text>

      <Text>E-mail</Text>
      <TextInput
        style={styles.extinput}
        value={user.userEmail}
        // onChangeText={(e) => inputChange(e)}
        onChangeText={(text) => AddUsers({ ...user, userEmail: text })}

      />

      <Text>Password</Text>
      <TextInput
        style={styles.extinput}
        value={user.password}
        onChangeText={(text) => AddUsers({ ...user, password: text })}
        secureTextEntry={true}
      />

      <Text>userName</Text>
      <TextInput
        style={styles.extinput}
        value={user.userName}
        onChangeText={(text) => AddUsers({ ...user, userName: text })}
      />
      <Text>userAge</Text>
      <TextInput
        style={styles.extinput}
        value={user.userAge}
        onChangeText={(text) => AddUsers({ ...user, userAge: text })}
      />

      <Button style={styles.buttonlog} onPress={createRequest} mode="contained">
        sign up
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    textAlign: "center",
    marginTop: "4%",
    marginBottom: "5%",
    fontSize: 23,
  },
  extinput: {
    textAlign: "center",
    marginTop: "1%",
    marginBottom: "5%",
    fontSize: 20,
    textAlign: "left",

    height: 50,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#f52e57",
  },
  buttonlog: {
    marginTop: "3%",
    marginBottom: "3%",
    backgroundColor: "#f52e57",
    fontSize: 20,
  },
});

export default Signup;
