import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Flatcard = () => {
  return (
    <View>
      <Text style={styles.title}>Top Destinations</Text>
      <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Image
             source={{uri:'https://www.ekashmirtourism.com/wp-content/uploads/2022/08/Sonmarg-Kashmir-valley.jpg'}}
             style={styles.cardImage}/>
        </View>
        <View style={[styles.card, styles.cardtwo]}>
          <Image
            source={{uri:'https://blogs.tripzygo.in/wp-content/uploads/2024/05/places-to-visit-in-pahalgam-kashmir-1024x683.jpg'}}
            style={styles.cardImage}/>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Image
            source={{uri:'https://www.kashmironline.com/top-destinations/pahalgam/slider/camping_mobile.jpg'}}
            style={styles.cardImage}/>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
     cardImage:{
        height: 150,
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
  container: {
    flexDirection: 'row',
    
  },
  card: {
    height: 150,
    width: 150,
    borderRadius: 4,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardone: {
    backgroundColor: 'red',
  },
  cardtwo: {
    backgroundColor: 'green',
  },
  cardthree: {
    backgroundColor: 'blue',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Flatcard;
