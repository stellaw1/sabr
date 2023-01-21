import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import SearchBar from "react-native-dynamic-search-bar";
import CarouselCards from "../components/CarouselCards"
import CarouselCardItem from "../components/CarouselCardItem"
export default function DinerHomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Search here"
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
          />

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
        flex: 3,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchbar:{
      backgroundColor: '#fff'
    }
});
