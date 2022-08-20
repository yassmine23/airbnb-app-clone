import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';

export default function App() {
  return ( <>
    <View style={styles.header}>
            <Header/>
    </View>
    <ScrollView style={styles.header} >
      <Card/>

    </ScrollView>

    <View>
      <Footer/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 
  header:{
    padding:30,
  }
});
