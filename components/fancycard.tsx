import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const FancyCard = () =>{
    return(
        <View>
            <Text style={styles.title}>Speciality</Text>
            <View style = {[styles.card, styles.cardElevated]}>
                <Image
                source={{ uri: 'https://plutotours.in/places/wp-content/uploads/2023/12/2.Gulmarg.webp'}}
                style = {styles.cardImage}
                />
                <View style = {styles.cardBody}>
                    <Text style={styles.cardTitle}>Gondola ride Kashmir</Text>
                    <Text style={styles.cardLabel}>Scenic Cable-Car Ride. Considered as one of Asia's longest and highest cable car ride, this entire ride comprises of two stages-Gulmarg to Kongdoori, and Kongdoori to Apharwat Peak. Timings. 10:00 am - 4:00 pm.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    },
    card:{},
    cardElevated:{},
    cardImage:{
    height: 180
    },
    cardBody:{},
    cardTitle:{
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    },
    cardLabel:{
    fontSize: 20,
    margin: 10,
    
    }
    

});

export default FancyCard;

