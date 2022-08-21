import React from 'react'
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import TabsHeader from '../components/tabsHeader';

export default function HomePage() {
  return (
    <>
     <View >
    <View style={styles.header}>
            <Header/>
            <TabsHeader/>

    </View>

    <ScrollView style={styles.container}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>


    </ScrollView>           
    

    <View style={styles.footer}>
      <Footer/>
    </View>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
 
    header:{
      padding:30,
    },
    container:{
      flexGrow:1,
    //    alignItems:'center'
    },
    footer:{
        position:'absolute',
        bottom:0,

    }
    
    
  });