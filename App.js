import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';
import TabsHeader from './components/tabsHeader';

export default function App() {
  return ( <>
    <View style={styles.header}>
            <Header/>
    </View>
    <View style={styles.container}>
    <Card/></View>           
    

    

    <View>
      <Footer/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 
  header:{
    padding:30,
  },
  container:{
    flex:1,
     alignItems:'center'
  }
});
