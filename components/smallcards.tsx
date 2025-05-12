import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const SmallCards = () =>{
    return(
        <View>
            <Text style={styles.title}>Places to visit</Text>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
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
                <View style={[styles.card, styles.cardfour]}>
                    <Image
                    source={{uri: 'https://images.wanderon.in/gallery/new/2025/02/15/khalinmarg-kashmir.webp'}}
                    style={styles.cardImage}/>
                </View>

            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer:{},
    title:{
        fontSize:20,
        fontWeight:'bold',
        margin:10
    },
    card: {
    height: 200,
    width: 200,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    },
    cardone: {
    },
    cardtwo: {},
    cardthree: {},
    cardfour: {},
    cardImage:{
        height: 180,
        width: 180,
        justifyContent:'center',
        alignItems:'center',
        margin:4
        

    }
})

export default SmallCards;