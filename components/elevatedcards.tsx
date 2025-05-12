import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.title}>Adventure Activities</Text>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <View style={[styles.card, styles.cardone]}>
          <Image
            source={{uri:'https://indotoursadventures.com/public/tinymce_images/6660be21f21b1a72c6a36a0b66017ffa.jpg'}}
            style={styles.cardImage}/>
        </View>
        <View style={[styles.card, styles.cardtwo]}>
          <Image
            source={{uri:'https://www.ekashmirtourism.com/wp-content/uploads/2022/12/trekking-in-kashmir.jpg'}}
            style={styles.cardImage}/>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Image
            source={{uri:'https://www.kashmirhills.com/wp-content/uploads/2023/11/River-Rafting-kashmir-hill.jpg'}}
            style={styles.cardImage}/>
        </View>
        <View style={[styles.card, styles.cardfour]}>
          <Image
            source={{uri:'https://images.wanderon.in/blogs/new/2023/08/aryamanwanderon_adventure_sports_in_kashmir_-_a_snow-covered_mo_da518ec5-ce74-45f7-b64b-d48b82eb3fb8.png'}}
            style={styles.cardImage}/>
        </View>
        <View style={[styles.card, styles.cardfive]}>
          <Image
            source={{uri:'https://blogs.tripzygo.in/wp-content/uploads/2024/05/places-to-visit-in-pahalgam-kashmir-1024x683.jpg'}}
            style={styles.cardImage}/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    cardImage:{
        height: 200,
        width: 150,
        justifyContent:'center',
        alignItems:'center',
        margin:4
        

    },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 8,
  },
  card: {
    height: 200,
    width: 150,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // adds shadow on Android
  },
  cardone: {
    
  },
  cardtwo: {
    
  },
  cardthree: {
    
  },
  cardfour: {
    
  },
  cardfive: {
    
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ElevatedCards;
