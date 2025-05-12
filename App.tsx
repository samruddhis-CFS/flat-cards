import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Flatcard from './components/flatcard';
import ElevatedCards from './components/elevatedcards';
import FancyCard from './components/fancycard';
import SmallCards from './components/smallcards';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex:1}}>
        <Flatcard />
        <ElevatedCards />
        <FancyCard/>
        <SmallCards/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:100
  },
});

export default App;
