import * as React from "react";
import { View,ScrollView , StyleSheet ,Text ,TextInput , SafeAreaView,  Alert  } from "react-native";
import { Button } from 'react-native-paper';

const Signup = () => {
  const [name, setName] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  return (
    <ScrollView style={styles.container}>
        <Text  style={styles.title}>Sign up</Text>

        <Text>User Name</Text>
        <TextInput
        style={styles.extinput}
        value={name}
        onChangeText={(name) => setName(name)}
        />
        <Text>E-mail</Text>
        <TextInput
        style={styles.extinput}
        value={email}
        onChangeText={(email) => setEmail(email)}
        />

        <Text>Age</Text>
        <TextInput
        style={styles.extinput}
        value={age}
        onChangeText={(age) => setAge(age)}
        />
        <Text>Password</Text>
        <TextInput
        style={styles.extinput}
        value={Password} secureTextEntry={true} onChangeText={(Password) => setPassword(Password)} />
        
        
     
        <Button    style={styles.buttonlog}  mode="contained" onPress={() => Alert.alert('Simple Button pressed')}>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
    flex: 1,
    margin: 20,
    },
    title: {
    textAlign: 'center',
    marginTop:'4%',
    marginBottom:'5%',
    fontSize:23,
    
    },
    extinput: {
        textAlign: 'center',
        marginTop:'1%',
        marginBottom:'5%',
        fontSize:20,
        textAlign:"left",
        
        height: 50,
        padding:5,
        borderBottomWidth: 1,
        borderColor:"#f52e57"
        
    },
    buttonlog: {
        marginTop:'3%',
        marginBottom:'3%',
        backgroundColor:"#f52e57",
        fontSize:20,
        }

});

export default Signup;
