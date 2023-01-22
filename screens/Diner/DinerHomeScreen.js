import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from 'react-native-dynamic-search-bar';
import DinerCarousel from '../../components/DinerCarousel';
const data = [
    {
        image: require('../../assets/food1.jpeg')
    },
    {
        image: require('../../assets/food2.jpeg')
    },
    {
        image: require('../../assets/food3.jpeg')
    },
    {
        image: require('../../assets/food4.jpeg')
    },
    {
        image: require('../../assets/food5.jpeg')
    }
];

export default function DinerHomeScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Welcome to Diner Home</Text>
            </View>
            <View style={styles.titleBox}>
                <SearchBar
                    placeholder="Search here"
                    onPress={() => alert('onPress')}
                    onChangeText={(text) => console.log(text)}
                />
            </View>

            <View style={styles.labelBox}>
                <Text style={styles.label}>Up to 20% savings</Text>
            </View>
            <View style={styles.container}>
                <DinerCarousel data={data} />
            </View>

            {/* <View style={styles.labelBox}>
              <Text style={styles.label}>Up to 15% savings</Text>
          </View>
          <View style={styles.container} >
            <DinerCarousel data={data} /> 
          </View>
          <View style={styles.labelBox}>
              <Text style={styles.label}>Up to 10% savings</Text>
          </View>
          <View style={styles.container} >
            <DinerCarousel data={data} /> 
          </View> */}

            <View style={styles.titleBox}>
                <Text style={styles.title}>More Savings Coming your way!</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 10,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchbar: {
        backgroundColor: '#fff'
    },
    titleBox: {
        padding: 15
    },

    title: {
        textAlign: 'center',
        fontSize: 20
    },
    labelBox: {
        padding: 8
    },
    label: {
        fontSize: 18
    }
});
