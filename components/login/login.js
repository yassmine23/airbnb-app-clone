import * as React from "react";
import { View , StyleSheet ,Text ,TextInput ,  SafeAreaView,  Alert  } from "react-native";
import { Button } from 'react-native-paper';

const Login = () => {
  const [text, setText] = React.useState("");
  const [Password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
        <Text  style={styles.title}>Log in</Text>

        <Text>E-mail</Text>
        <TextInput
        style={styles.extinput}
        value={text}
        onChangeText={(text) => setText(text)}
        />

        <Text>Password</Text>
        <TextInput
        style={styles.extinput}
        value={Password} secureTextEntry={true} onChangeText={(Password) => setPassword(Password)} />
     
        <Button style={styles.buttonlog}  mode="contained" onPress={() => Alert.alert('Simple Button pressed')}>
  Log in
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
    textAlign: 'center',
    marginTop:'4%',
    marginBottom:'10%',
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
        marginTop:'6%',
        marginBottom:'3%',
        backgroundColor:"#f52e57",
        fontSize:20,
    }

});

export default Login;
