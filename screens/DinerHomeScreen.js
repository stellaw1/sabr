import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import SearchBar from "react-native-dynamic-search-bar";
import DinerCarousel from "../components/DinerCarousel"
const data = [
  {
    image: require('../assets/food1.jpeg')
  },
  {
    image: require('../assets/food2.jpeg')
  },
  {
    image: require('../assets/food3.jpeg')
  },
  {
    image: require('../assets/food4.jpeg')
  },
  {
    image: require('../assets/food5.jpeg')
  },

]

export default function DinerHomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Search here"
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
          />
          
          <DinerCarousel data={data} /> 
          <View style={styles.container} >
              <Text>Welcome to Diner Home</Text>
          </View>
          <View style={styles.container} >
              <Text>Restaurant Here</Text>
          </View>
          <View style={styles.container} >
              <Text>Restaurant Here</Text>
          </View>
          <View style={styles.container} >
              <Text>Restaurant Here</Text>
          </View>
          <View style={styles.container} >
              <Text>Restaurant Here</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchbar:{
      backgroundColor: '#fff'
    }
});
